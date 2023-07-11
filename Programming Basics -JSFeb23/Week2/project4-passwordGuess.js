function passGuess(input){
    let mainPass = "s3cr3t!P@ssw0rd";
    let tryPass = input[0];
    if (tryPass === mainPass){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}