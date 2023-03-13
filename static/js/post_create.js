jQuery(document).ready(function ($) {
    getMySimpleProfile();

    // 엔터키 입력 시 검색 실행
    $('#music-keyword').keypress(function(e) {
        if(e.which === 13) { // Enter key
            getMusicSearchList();
        }
    });
});


let post_url_userId;

function postCreate() {

    $.ajax({
        type: "POST",
        url: "https://api.odle8.com/posts",
        headers: {
            "Authorization": localStorage.getItem('accessToken')
        },
        data: JSON.stringify({
            content: $(`#content`).val(),
            tagList: $(`#tag`).val(),
            openOrEnd: $(`input[name='btnradio']:checked`).val(),
            emotion: $(`input[name='emotion']:checked`).val(),
            melonId: $(`#post-melon-id`).text(),
            title: $(`#post-title`).text(),
            singer: $(`#post-singer`).text(),
            cover: $(`#post-cover`).attr('src')
        }),
        contentType: "application/json; charset=UTF-8",
        success: function (response) {
            if (response['statusCode'] === 201) {
                alert("게시글 작성 완료");
                location.href = './profile.html?userId='+post_url_userId;
            }
        }
    })
}

function getMySimpleProfile() {
    var settings = {
        "url": "https://api.odle8.com/users/profile/simple",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response, status) {
        $('#myProfileUsername').text(response['username'])
        $('#myProfileImage').attr('src', response['profileImage'] == null ? '../static/images/nullprofile.jpeg' : response['profileImage'])
        if (status === 403) { // 권한이 없는 것이니까 로그인으로 보내면 됨
            window.location = "/login.html"
        }
        post_url_userId = response['userId']
        // 프로필 이거 꼭 적어주시기!
        const tokenExpiration = response['tokenExpiration']
        const expiration_time = new Date(tokenExpiration).getTime();
        timer(expiration_time)
        $('#myProfile_post_pic').attr('onclick', `window.location.href='./profile.html?userId=${post_url_userId}'`)
        $('#myProfile_post').attr('onclick', `window.location.href='./profile.html?userId=${post_url_userId}'`)
    });
}
function getMusicSearchList() {
    const option = $(`input[name='music-search']:checked`).val();
    const keyword = $(`#music-keyword`).val();
    var settings = {
        "url": `https://api.odle8.com/music/search/${option}/${keyword}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
        "contentType": "application/json; charset=UTF-8",
    };

    $.ajax(settings).done(function (response) {
        $("#searched-music-list").empty()
        for (let i = 0; i < response.length; i++) {
            const melonMusicId = response[i]['melonMusicId']
            const title = response[i]['title']
            const singer = response[i]['singer']
            const cover = response[i]['cover']
            const temp_music = `<button type="button" class="btn btn-primary" id="temp" onclick="selectMusic(${melonMusicId}, '${title}', '${singer}', '${cover}')"><div>ID: ${melonMusicId},</div>
<div>제목: ${title},</div>
<div>가수: ${singer}</div>
<div><img src="${cover}"></div>
</button>`
            $('#searched-music-list').append(temp_music)
        }
    });
}

function selectMusic(melonMusicId, title, singer, cover) {
    $('#post-melon-id').text(melonMusicId)
    $('#post-title').text(title)
    $('#post-singer').text(singer)
    document.getElementById("post-cover").src = cover

    alert("노래 선택 완료");
}


function show() {
    document.querySelector(".background2").className = "background2 show";
}

function close() {
    document.querySelector(".background2").className = "background2";
}

$('.background2').click(function(event) {
    if (!$(event.target).closest('.window').length) {
        close();
    }
});


document.querySelector("#show").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);



