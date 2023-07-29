function passValidator(password){
    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;

    if (isInvalidLength){
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let isOnlyLettersAndDigits = true;
    let digitsCounter = 0;

    for (let index = 0; index < password.length; index++) {
        let currentCode = password.charCodeAt(index);
        let isNotDigit = currentCode < 48 || currentCode > 57;
        let isDigit = currentCode >= 48 && currentCode <= 57;
        let isNotUpperCase = currentCode < 65 || currentCode > 90;
        let isNotLowerCase = currentCode < 97 || currentCode > 122;

        if(isDigit){
            digitsCounter++;
        }

        if (isNotDigit && isNotUpperCase && isNotLowerCase) {
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }

    if(!isOnlyLettersAndDigits){
        console.log("Password must consist only of letters and digits");
    }
    if(digitsCounter < 2){
        console.log("Password must have at least 2 digits");
        isValidPass = false;
    }

    if (isValidPass) {
        console.log("Password is valid");
    }
}

passValidator("Picture")