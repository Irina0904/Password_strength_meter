'use strict'
function isGoodValue(){
    var inputValue = document.getElementById("pwd").value;
    updateChecklist(inputValue);
    if(isSecurePassword(inputValue)){
        changeToStrong();
    }else if(isMediumPassword(inputValue)){
        changeToMedium();
    }else{
        changeToDefault();
    }
}

function changeToMedium(){
    var passwordBar =  document.getElementById("passwordBar");
        passwordBar.className = "w3-container w3-orange w3-round-xlarge";
        passwordBar.style.width = "60%";

        var passwordStrengthLabel = document.getElementById("passwordStrengthLabel");
        passwordStrengthLabel.innerHTML = "Password strength: medium";
        document.getElementById("submitButton").disabled = false;
}

function changeToStrong(){
    var passwordBar =  document.getElementById("passwordBar");
        passwordBar.className = "w3-container w3-green w3-round-xlarge";
        passwordBar.style.width = "100%";

        var passwordStrengthLabel = document.getElementById("passwordStrengthLabel");
        passwordStrengthLabel.innerHTML = "Password strength: secure";
        document.getElementById("submitButton").disabled = false;
}

function changeToDefault(){
    var passwordBar =  document.getElementById("passwordBar");
        passwordBar.className = "w3-container w3-red w3-round-xlarge";
        passwordBar.style.width = "25%";

        var passwordStrengthLabel = document.getElementById("passwordStrengthLabel");
        passwordStrengthLabel.innerHTML = "Password strength: weak";
        document.getElementById("submitButton").disabled = true;
}

function isMediumPassword(password){
    if(password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)){
        return true;
    }
}

function isSecurePassword(password){
    var hasNumber = /\d/;
    if(isMediumPassword(password) && hasSpecialCharacter(password) && hasNumber.test(password)){
        return true;
    }
}

function hasSpecialCharacter(password){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(password)){
        return true;
    }
}

function updateChecklist(password){
    //const pwLength = document.getElementById("pwLength").innerHTML;
    if(password.length >= 8){
        document.getElementById("pwLength").innerHTML = "\u2714 Is at least 8 characters";
    }
    if(/[A-Z]/.test(password) && /[a-z]/.test(password)){
        document.getElementById("pwCase").innerHTML = "\u2714 Contains both lower and uppercase letters";
    }
    if(/\d/.test(password)){
        document.getElementById("pwDigit").innerHTML = "\u2714 Has numbers";
    }
    if(hasSpecialCharacter(password)){
        document.getElementById("pwSpecialChar").innerHTML = "\u2714 Has special characters such as %_# e.t.c";
    }
}