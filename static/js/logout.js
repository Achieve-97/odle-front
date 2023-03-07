function logOut() {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = getCookie('RefreshToken');
    const settings = {
        "url": "http://ec2-3-37-153-26.ap-northeast-2.compute.amazonaws.com:8080/users/logout",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "RefreshToken": refreshToken,
            "Authorization": accessToken
        }

    };

    $.ajax(settings)
        .done(function (response) {
            localStorage.setItem('accessToken', '');
            console.log(response);
            window.location = 'signin.html'
        });
}

function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}
