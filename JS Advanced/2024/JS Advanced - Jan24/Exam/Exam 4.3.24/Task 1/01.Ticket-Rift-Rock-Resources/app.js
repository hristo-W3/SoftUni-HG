window.addEventListener("load", solve);

function solve() {
    const nrOfTickets = document.getElementById("num-tickets");
    const seatingPreference = document.getElementById("seating-preference");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById('phone-number');

    const colPreview = document.getElementsByClassName("preview bot")[0];
    const colPurchased = document.getElementsByClassName("purchased bot")[0];

    document.getElementById('purchase-btn').addEventListener("click", addTickets);

    function addTickets(ev) {
        console.log("tickets");
    }
}
