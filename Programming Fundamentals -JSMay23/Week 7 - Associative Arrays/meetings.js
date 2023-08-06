function meetings(arr){
    let calendar = {};
    for (const el of arr) {
        let [day, name] = el.split(' ');
        if(calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in calendar) {
        console.log(`${day} -> ${calendar[day]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)