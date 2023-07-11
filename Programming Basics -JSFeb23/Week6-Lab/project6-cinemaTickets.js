function cinemaTicket(input) {
 
    let index = 0;
    let command = input[index];
    let student = 0;
    let standard = 0;
    let kid = 0;
    let totalTickets = 0;
 
    while(command !== "Finish") {
        let name = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        command = input[index];
        let seatType = command;
        let usedSeats = 0;
 
        while (seatType !== "End") {
            
            switch(seatType) {
                case "student":
                    student++;
                break;
                case "standard":
                    standard++;
                break;
                case "kid":
                    kid++;
                break;
            }
            totalTickets++;
            usedSeats++;
            if (usedSeats >= freeSeats) {
                break;
            }
            
            index++;
            command = input[index];
            seatType = command;
           
        }
        console.log(`${name} - ${(usedSeats / freeSeats * 100).toFixed(2)}% full.`);
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTicket(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
