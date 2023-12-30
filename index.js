function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var usernameError = document.getElementById('usernameError');
    if (!validateEmail(username)) {
        usernameError.textContent = 'Invalid email address';
        return;
    } else {
        usernameError.textContent = '';
    }

    var passwordError = document.getElementById('passwordError');
    if (password !== "SmartServTest@123") {
        passwordError.textContent = 'Incorrect password';
        return;
    } else {
        passwordError.textContent = '';
    }

    console.log('Logged in successfully!');
    window.location.href = "dash.html";
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePasswordFormat(password) {
    // Password must contain an uppercase letter, a number, and no special characters other than '@'
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]).*[^\W_@]$/;
    return passwordRegex.test(password);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('forgotPasswordLink').addEventListener('click', function() {
        let subject = "Password Reset Request";
        let body = "Dear support team,I would like to request a password reset for my account.Thank you";

        let mailtoLink = "mailto:support@smartserv.io?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        
        window.location.href = mailtoLink;
    });
});