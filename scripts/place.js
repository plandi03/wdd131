document.addEventListener("DOMContentLoaded", () => {
    console.log("Place page loaded!");

    // Static values for temperature and wind speed
    const temperature = 25; // °C
    const windSpeed = 10; // km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, speed) {
        // Formula for wind chill in °C
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1); // Round to 1 decimal place
    }

    // Check if wind chill calculation is applicable
    let windChillValue = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
    }

    // Display wind chill in the weather section
    document.getElementById("windChill").textContent = windChillValue;

    // Update footer with current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Update footer with last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});