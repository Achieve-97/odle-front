function signUpAdmin() {
    $.ajax({
        type: "POST",
        url: "https://api.odle8.com/users/admin-signup",
        data: JSON.stringify({
            username: $(`#username`).val(),
            email: $(`#email`).val(),
            password: $(`#password`).val(),
            adminToken: $(`#admin_token`).val()
        }),
        contentType: "application/json; charset=UTF-8",
        success: function () {
            alert("회원가입 완료")
            location.href="signin.html"
        }
    })
}
