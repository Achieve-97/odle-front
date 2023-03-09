$(document).ready(function() {
    $("#password").keydown(function(event) {
        if (event.keyCode === 13) {
            signIn();
        }
    });
});

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
        window.location = 'index.html'
    }).fail(function (response) {
        console.log(response.responseJSON)
        const errorMessage = response.responseJSON['errorMessage']
            if (errorMessage) {
                alert(errorMessage);
            } else {
                alert("에러: " + response.status)
            }
    });
}
