function logOut() {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = getCookie('RefreshToken');
    const settings = {
        "url": "https://api.odle8.com/users/logout",
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
            window.location = '../signin.html'
        });
}

function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}
