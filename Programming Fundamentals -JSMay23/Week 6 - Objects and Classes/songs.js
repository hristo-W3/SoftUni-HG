function solve(array) {
    class Songs{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    
    let allSongs = array.shift();
    let command = array.pop();
    let songs = [];
    

    for (let i = 0; i < allSongs; i++) {
        let [typeList, name, time] = array[i].split("_");
        let song = new Songs(typeList, name, time);
        songs.push(song);
    }
    if (command === 'all'){
        songs.forEach((song) => console.log(song.name));
    } else {
        let filtered = songs.filter((song) => song.type === command);
        filtered.forEach((song) => console.log(song.name));
    }    
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )
console.log('-----------------');
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )
console.log('-----------------');
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )