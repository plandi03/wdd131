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
        {
            templeName: "Provo City Center",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85084,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11074.jpg"
        },
        {
            templeName: "St. George Utah",
            location: "St. George, Utah, United States",
            dedicated: "1877, April, 6",
            area: 143969,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-36522.jpg"
        },
        {
            templeName: "Quito Ecuador",
            location: "Cumbayá, Quito, Ecuador",
            dedicated: "2022, November, 20",
            area: 36780,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31201.jpg"
        },
        {
            templeName: "Cochabamba Bolivia",
            location: "Alto Queru Queru, Cochabamba, Bolivia",
            dedicated: "2000, April, 30",
            area: 35500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721.jpg"
        },
        {
            templeName: "Laie Hawaii",
            location: "Laie, Hawaii, United States",
            dedicated: "1919, November, 27",
            area: 42100,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3830.jpg"
        },
        {
            templeName: "Logan Utah",
            location: "Logan, Utah, United States",
            dedicated: "1884, May, 17",
            area: 119619,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550.jpg"
        }
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
            filtered = temples.filter(temple => temple.area < 50000);
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