function login(input){
    let username = input[0];
    let password = '';
    for (let i = username.length-1; i >= 0; i--){
        password += username[i];
    }
    let counter = 0
    while (counter < 5){
        counter++;
        if (input[counter] === password){
            console.log(`User ${username} logged in.`);
            break;
        } else if (input[counter] !== password && counter > 3){console.log(`User ${username} blocked!`); break;}
        else {console.log("Incorrect password. Try again.");}
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])