function matchPhoneNumber(input) {
    let validNames = [];

    let pattern = /(\+359([ -])2(\2)(\d{3})(\2)(\d{4}))\b/gm;

    let match = input[0].match(pattern);
    console.log(match.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])