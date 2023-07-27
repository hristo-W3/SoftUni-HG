function reqRead(totalPages, pagesPerHour, days){
    let totalHours = totalPages / pagesPerHour;
    let pagePerDay = totalHours / days;
    console.log(pagePerDay);
}

reqRead(432,15,4)