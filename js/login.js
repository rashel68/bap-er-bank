document.getElementById('login-button').addEventListener('click', function () {
    const email = document.getElementById('emailField').value;
    const password = document.getElementById('passField').value;
    if (email == 'mr@gmail.com' && password == '259537') {
        window.location.href = 'bank.html';
    } else {
        document.getElementById('error-msg').innerText = 'Invalid Password or Username';
    }
})