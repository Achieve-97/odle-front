function signIn() {
    var settings = {
        type: "POST",
        url: "https://api.odle8.com/users/login",
        data: JSON.stringify({
            email: $(`#email`).val(),
            password: $(`#password`).val()
        }),
        contentType: "application/json; charset=UTF-8",
    }
    $.ajax(settings).done(function (response, status, xhr) {
        localStorage.setItem('accessToken', xhr.getResponseHeader('Authorization'))
        document.cookie =
            'RefreshToken' + '=' + xhr.getResponseHeader('RefreshToken') + ';path=/';
        alert("로그인 완료");
        window.location = 'index.html'
    })
}