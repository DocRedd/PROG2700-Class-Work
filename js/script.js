document.addEventListener('DOMContentLoaded', function() {
    let location = "Halifax"; 
    checkLocation(location);
});

function checkLocation(location) {
    let message;
    const currentDate = new Date();
    const startTravelDate = new Date(currentDate.getFullYear(), 0, 19); // Jan 19
    const endTravelDate = new Date(currentDate.getFullYear(), 1, 19); // Feb 19

    if (location === "Halifax") {
        message = "Airport: Halifax Stanfield International Airport, Code: YHZ";
    } else if (currentDate >= startTravelDate && currentDate <= endTravelDate) {
        message = "I am traveling in Costa Rica.";
    } else {
        message = "Where are you located and where are you going?";
    }

    // Outputting to a div
    document.getElementById("output").innerText = message;
}
