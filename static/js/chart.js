let login_chart_userId;

// 페이지가 로딩될 때 실행되는 거
jQuery(document).ready(function ($) {
    getMySimpleProfile();
    getAngryChart();
    getSadChart();
    getScreamChart();
    getShyChart();
    getHappyChart();
    getLoveChart();
    getFlexChart();
});

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
        login_chart_userId = response['userId']
        $('#myProfileUsername3').text(response['username'])
        $('#myProfileImage3').attr('src', response['profileImage'] == null ? '../static/images/nullprofile.jpeg' : response['profileImage'])
        if (status === 403) { // 권한이 없는 것이니까 로그인으로 보내면 됨
            window.location = "/login.html"
        }
        const userId = response['userId']
        const tokenExpiration = response['tokenExpiration']
        const expiration_time = new Date(tokenExpiration).getTime();
        timer(expiration_time)
        $('#myProfile6').attr('onclick', `window.location.href='./profile.html?userId=${userId}'`)
        $('#myProfile7').attr('onclick', `window.location.href='./profile.html?userId=${userId}'`)
        $('#myProfile8').attr('onclick', `window.location.href='./profile.html?userId=${userId}'`)
    });
}

function getAngryChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/ANGRY",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todayAngryCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="angryChartCover">
                        <div class="chart__musicInfo" style="cursor : pointer">
                            <span style="font-weight: bold" style="cursor : pointer">${title}</span>
                            <span style="cursor : pointer">${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todayAngryCount}</span>
                        </div> 
                    </div>
        `
            $('#getAngryChart').append(tempHtml)
        }
    });
}

function getSadChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/SAD",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todaySadCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="sadChartCover">
                        <div class="chart__musicInfo">
                            <span style="font-weight: bold">${title}</span>
                            <span>${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todaySadCount}</span>
                        </div> 
                    </div>
        `
            $('#getSadChart').append(tempHtml)
        }
    });
}
function getScreamChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/SCREAM",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todayScreamCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="screamChartCover">
                        <div class="chart__musicInfo">
                            <span style="font-weight: bold">${title}</span>
                            <span>${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todayScreamCount}</span>
                        </div> 
                    </div>
        `
            $('#getScreamChart').append(tempHtml)
        }
    });
}
function getShyChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/SHY",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todayShyCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="shyChartCover">
                        <div class="chart__musicInfo">
                            <span style="font-weight: bold">${title}</span>
                            <span>${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todayShyCount}</span>
                        </div> 
                    </div>
        `
            $('#getShyChart').append(tempHtml)
        }
    });
}
function getHappyChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/HAPPY",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todayHappyCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="happyChartCover">
                        <div class="chart__musicInfo">
                            <span style="font-weight: bold">${title}</span>
                            <span>${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todayHappyCount}</span>
                        </div> 
                    </div>
        `
            $('#getHappyChart').append(tempHtml)
        }
    });
}
function getLoveChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/LOVE",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todayLoveCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="loveChartCover">
                        <div class="chart__musicInfo">
                            <span style="font-weight: bold">${title}</span>
                            <span>${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todayLoveCount}</span>
                        </div> 
                    </div>
        `
            $('#getLoveChart').append(tempHtml)
        }
    });
}
function getFlexChart() {
    var settings = {
        "url": "https://api.odle8.com/music/charts/FLEX",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": localStorage.getItem('accessToken')
        },
    };

    $.ajax(settings).done(function (response) {
        for (let i = 0; i <= 6; i++) {
            const obj = response[i];
            const title = obj['title']
            const singer = obj['singer']
            const cover = obj['cover']
            const todayFlexCount = obj['todayEmotionCount']

            const tempHtml = `
                    <div class="chart__musics">
                        <img alt="앨범 커버" src="${cover == null ? '../static/images/nullprofile' : cover}" id="flexChartCover">
                        <div class="chart__musicInfo">
                            <span style="font-weight: bold">${title}</span>
                            <span>${singer}</span>
                        </div>
                        <div class="chart__emotion_count">
                            <span>post ${todayFlexCount}</span>
                        </div> 
                    </div>
        `
            $('#getFlexChart').append(tempHtml)
        }
    });
}