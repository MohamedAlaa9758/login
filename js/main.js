var signupEmailInput = document.getElementById('signupEmail');
var signupNameInput = document.getElementById('signupName');
var signupPassInput = document.getElementById('signupPass');
var loginEmailInput = document.getElementById('loginEmail');
var loginPassInput = document.getElementById('loginPass');
var logOut = document.getElementById('logOut')


var usersList = []
var signupBtn = document.querySelector('.signupBtn');
signupBtn.addEventListener('click', function (e) {
    if (
        formvalidtion(signupEmailInput) &&
        formvalidtion(signupNameInput) &&
        formvalidtion(signupPassInput)
    ) {
        var user = {
            name: signupNameInput.value,
            email: signupEmailInput.value,
            pass: signupPassInput.value
        }
        usersList.push(user)
        localStorage.setItem('users', JSON.stringify(usersList));
        clrForm();
    }

})
function formvalidtion(element) {
    var regex = {
        signupEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        signupName: /^[a-z0-9_-]{3,15}$/,
        signupPass: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    }
    if (regex[element.id].test(element.value)) {
        document.getElementById('success').classList.remove('d-none');
        document.getElementById('erro').classList.add('d-none');
        return true;
    } else {
        document.getElementById('success').classList.add('d-none');
        document.getElementById('erro').classList.remove('d-none');
        return false;
    }
}
document.getElementById('signupPage').addEventListener('click', function () {
    document.getElementById('signUp').classList.add('d-none');
    document.getElementById('signIn').classList.remove('d-none');

})
document.getElementById('loginPage').addEventListener('click', function () {
    document.getElementById('signUp').classList.remove('d-none');
    document.getElementById('signIn').classList.add('d-none');

})
var chekUser = JSON.parse(localStorage.getItem('users'));
var loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', function (e) {
    if (loginEmailInput.value === '' || loginPassInput.value === '') {
        document.getElementById('erroLogin').classList.remove('d-none');
    } else {
        document.getElementById('erroLogin').classList.remove('d-none');
    }

    for (var i = 0; i < chekUser.length; i++) {

        if (loginEmailInput.value === chekUser[i].email &&
            loginPassInput.value === chekUser[i].pass
        ) {
            document.getElementById('sayHello').classList.remove('d-none');
            document.getElementById('navBar').classList.remove('d-none');
            document.getElementById('signIn').classList.add('d-none');
            welcomeMass();
        }
        else {
            document.getElementById('erroLogin').classList.remove('d-none');
        }
    }
})

function welcomeMass() {
    var cartoona = '';
    for (var i = 0; i < chekUser.length; i++) {
        if (chekUser[i].email === loginEmailInput.value) {
            cartoona = `<h1>welcome ${chekUser[i].name}</h1>`;
        }
    }
    cardParg.innerHTML = cartoona;
}
logOut.addEventListener('click', function () {
    document.getElementById('sayHello').classList.add('d-none');
    document.getElementById('navBar').classList.add('d-none');
    document.getElementById('signIn').classList.remove('d-none');
    document.getElementById('erroLogin').classList.add('d-none');
    clrForm();
})
function clrForm() {
    loginPassInput.value = null;
    loginEmailInput.value = null;
    signupPassInput.value = null;
    signupNameInput.value = null;
    signupEmailInput.value = null;
}