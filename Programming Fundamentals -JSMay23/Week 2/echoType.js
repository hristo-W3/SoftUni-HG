function echoType(param){
    console.log(typeof(param));
    let result = (typeof(param) === "string" || typeof(param) === "number") ? param : "Parameter is not suitable for printing";
    console.log(result);
}

echoType("Hello JS")