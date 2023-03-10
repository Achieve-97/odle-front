function inactivateMe() {
    const settings = {
        url: "https://api.odle8.com/users/inactivation",
        type: "PATCH",
        timeout: 0,
        headers: {
            "Authorization": localStorage.getItem('accessToken'),
            "Content-Type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify({
            "password": $(`#check-password`).val()
        }),
    };
    
    $.ajax(settings).done(function (response) {
        alert("회원 비활성화가 처리되었습니다.")
        window.location = 'signin.html'
    }).fail(function (response) {
        if(response.status === 403){
            alert("비밀번호를 확인해주세요.")
        }
    });
}