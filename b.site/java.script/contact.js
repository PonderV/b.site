// ============================================
// contact.js – Form Validation
// Koenigsegg CCXR Fan Site
// ============================================

// Bug Fix #1 – This function was MISSING from the teacher's code.
// It checks if a character is a letter (a-z or A-Z).
function isCharacterALetter(ch) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
        return true;
    }
    return false;
}

// Bug Fix #3 – Teacher's version was missing the 'return' keyword.
// Returns true if the character is a digit (0-9).
function isDigit(ch) {
    if (ch >= "0" && ch <= "9") {
        return true;
    }
    return false;
}

function isLetter(ch) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
        return true;
    }
    return false;
}

// Checks that First Name is not empty and starts with a letter.
function fName() {
    var Fname = document.getElementById("FName").value;
    var msgBox = document.getElementById("msgBox7");

    if (Fname.length == 0) {
        msgBox.style.color = "red";           // Bug Fix #4 – was msg.style.color
        msgBox.innerHTML = "You must enter first name";
        return false;
    }
    if (!isCharacterALetter(Fname[0])) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "First name must start with a letter";
        return false;
    }
    msgBox.innerHTML = "";                    // Pattern: clear the error on success
    return true;
}

// Bug Fix #2 – Teacher's version checked Fname[0] instead of LastName[0].
function LastName() {
    var LastName = document.getElementById("LastName").value;
    var msgBox = document.getElementById("msgBox8");

    if (LastName.length == 0) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "You must enter last name";
        return false;
    }
    if (!isCharacterALetter(LastName[0])) {   // Bug Fix #2 applied here
        msgBox.style.color = "red";
        msgBox.innerHTML = "Last name must start with a letter";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

// Checks that username is not empty and starts with a letter.
function userNameVal() {
    var userName = document.getElementById("userName").value;
    var msgBox = document.getElementById("msgBox1");

    if (userName.length == 0) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "You must enter a user name";
        return false;
    }
    if (!isCharacterALetter(userName[0])) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "User name must start with a letter";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

// Checks password is at least 7 characters and has a special character.
function passwordVal() {
    var pass = document.getElementById("psw").value;
    var msgBox = document.getElementById("msgBox2");

    if (pass.length < 7) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Password must contain at least 7 characters";
        return false;
    }
    var specialChar = /[@!#$%^&*()\-+]/;
    if (!specialChar.test(pass)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Password must contain one special character";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

// Checks that password and confirm-password fields match.
function confirmFun() {
    var pass = document.getElementById("psw").value;
    var confirm = document.getElementById("cnfm").value;
    var msgBox = document.getElementById("msgBox5");

    if (pass != confirm) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Confirm password does not match password";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

// Validates the email address step by step using regular expressions.
function confirmemail() {
    var email = document.getElementById("email").value;
    var msgBox = document.getElementById("msgBox3");

    var reg = /^\w+/;
    if (!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Email must start with a letter or digit";
        return false;
    }
    reg = /^\w+([\.-]?\w+)/;
    if (!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Email can have only one . or - following a letter";
        return false;
    }
    reg = /^\w+([\.-]?\w+)*@/;
    if (!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Email must contain @";
        return false;
    }
    reg = /^\w+([\.-]?\w+)*@\w+/;
    if (!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "You need letters after @";
        return false;
    }
    reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!reg.test(email)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Invalid email address";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

// Validates an Israeli phone number format.
function confirmPhone() {
    var phone = document.getElementById("phone").value;
    var msgBox = document.getElementById("msgBox4");

    var reg = /^0(2|3|4|6|8|9|5[0-9]|73)-?[1-9]\d{6}$/;
    if (!reg.test(phone)) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Phone number is not valid";
        return false;
    }
    msgBox.innerHTML = "";
    return true;
}

// Bug Fix #5 – Main function uses Boolean Accumulation pattern.
// Each function runs. If ANY returns false, res becomes false.
// The && res at the end means we still run all checks (not short-circuit).
function validateForm() {
    var res = true;
    res = fName()        && res;
    res = LastName()     && res;
    res = userNameVal()  && res;
    res = passwordVal()  && res;
    res = confirmFun()   && res;
    res = confirmemail() && res;
    res = confirmPhone() && res;
    return res;
}