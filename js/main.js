


// all inputs
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
// var signinEmail = document.getElementById('signinEmail')
// var signinPassword = document.getElementById('signinPassword')

    // to get base url (localhost)
// var pathparts = location.pathname.split('/');
// var baseURL = ''
// for (var i = 0; i < pathparts.length - 1; i++) {
//     baseURL += '/' + pathparts[i]
// }
// console.log(baseURL);


// to say welcome in home page
// var username = localStorage.getItem('sessionUsername')
// if (username) {
//     document.getElementById('username').innerHTML = "Welcome " + username
// }

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

//for check inputs is empty or not
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

// localStorage.clear()



// for check email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i]?.email.toLowerCase() == signUpArray[i].signupEmail?.value.toLowerCase()) {
            return false
        }
    }
}
function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    // to store all value as object
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        
    }
}




// /////&&&&&&&&&&&&&77777
// var signUpArray = [];
// signUpArray = JSON.parse(localStorage.getItem("users"));

var signinPassword = document.getElementById('signinPassword');
var signinEmail = document.getElementById("signinEmail");
var LoginEmpty = document.getElementById("LoginEmpty");

LoginEmpty.addEventListener('click',function() {
    if (signinPassword.value == ''|| signinEmail.value == '') {
        document.getElementById("incorrect").innerHTML = `<spnn class="text-danger">ALL input is requrid</spnn>`;
        // console.log(signUpArray)
    }
    else {
        login();
    }
});


function login() {
    for (let i = 0; i < signUpArray.length; i++) {
        if (signinEmail.value == signUpArray[i].Email && signinPassword.value == signUpArray[i].Password) {
            var y = signUpArray[i].name
            localStorage.setItem('go',y)
            
        }
    }
}


// // ============= for login================
// //for check inputs is empty or not
// function isLoginEmpty() {

//     if (signinPassword.value == "" || signinEmail.value == "") {
//         return false
//     } else {
//         return true
//     }
// }

// function login() {
//     if (isLoginEmpty() == false) {
//         document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//         return false
//     }
//     var password = signinPassword.value
//     var email = signinEmail.value
//     for (var i = 0; i < signUpArray.length; i++) {
//         if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {

//             localStorage.setItem('sessionUsername', signUpArray[i].name)
//             if (baseURL == '/') {
//                 location.replace('https://' + location.hostname + '/home.html')

//             } else {
//                 location.replace(baseURL + '/home.html')

//             }
//         } else {
//             document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
//         }
//     }

// }

// // for logout
// function logout() {
//     localStorage.removeItem('sessionUsername')
//     localStorage.clear()
// }