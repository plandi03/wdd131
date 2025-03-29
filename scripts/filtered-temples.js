document.addEventListener("DOMContentLoaded", () => {
    // Temple data
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        // Add more temple objects here...
    ];

    // Display temples
    function displayTemples(filteredTemples) {
        const container = document.getElementById("temple-container");
        container.innerHTML = ""; // Clear existing content

        filteredTemples.forEach(temple => {
            const figure = document.createElement("figure");
            figure.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            `;
            container.appendChild(figure);
        });
    }

    // Filter temples
    function filterTemples(criteria) {
        let filtered = temples;

        if (criteria === "old") {
            filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (criteria === "new") {
            filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (criteria === "large") {
            filtered = temples.filter(temple => temple.area > 90000);
        } else if (criteria === "small") {
            filtered = temples.filter(temple => temple.area < 10000);
        }

        displayTemples(filtered);
    }

    // Event listeners for navigation buttons
    document.getElementById("home").addEventListener("click", () => displayTemples(temples));
    document.getElementById("old").addEventListener("click", () => filterTemples("old"));
    document.getElementById("new").addEventListener("click", () => filterTemples("new"));
    document.getElementById("large").addEventListener("click", () => filterTemples("large"));
    document.getElementById("small").addEventListener("click", () => filterTemples("small"));

    // Display all temples on page load
    displayTemples(temples);

    // Footer updates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});