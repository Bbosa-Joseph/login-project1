
var childWindow = window.open ("http://receiver.com", "_blank");

id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engine(username, 0, "User name cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(password, 2, "Password cannot be blank");
    });

    let engine = (id,serial, message) => {
        if (id.value.trim() === ""){
            errorMsg[serial].innerHTML = message;
            id.style.border = "2px solid red";
            //icons
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
        }
            else{
                errorMsg[serial].innerHTML = "";
                id.style.border = "2px solid green";
                //icons
                failureIcon[serial].style.opacity ="0";
                successIcon[serial].style.opacity = "1"
            }
        }
    //  var btn = document.getElementById("btn"),
    //     text = document.getElementById("text");
    // btn.addEventListener("click", function () {
    //     sendMessage(text.value);
    //     text.value = "";
    // });

    // function sendMessage(message) {
    //     if (!message ||!message.length) return;
    //     childWindow.postMessage(JSON.stringify({
    //         message: message,
    //         time:new Date()
    //     }), 'http://receiver.com');
    // }