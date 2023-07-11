function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3])/100;

    let volumeInCM3 = length * width * height;
    let volume = volumeInCM3 / 1000;
    let water = volume * (1-percent);
    console.log(water);
}

fishTank(['105','77','89','18.5']);