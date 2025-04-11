document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        {
            carName: "Tesla Model S",
            location: "California, USA",
            year: 2022,
            price: "$89,990",
            imageUrl: "images/tesla-model-s.webp"
        },
        {
            carName: "Ford Mustang",
            location: "Michigan, USA",
            year: 2021,
            price: "$55,300",
            imageUrl: "images/ford-mustang.webp"
        },
        {
            carName: "Chevrolet Camaro",
            location: "Detroit, USA",
            year: 2020,
            price: "$42,500",
            imageUrl: "images/chevrolet-camaro.webp"
        },
        {
            carName: "BMW M3",
            location: "Munich, Germany",
            year: 2023,
            price: "$70,895",
            imageUrl: "images/bmw-m3.webp"
        },
        {
            carName: "Audi R8",
            location: "Ingolstadt, Germany",
            year: 2022,
            price: "$158,600",
            imageUrl: "images/audi-r8.webp"
        }
    ];

    function displayCars(filteredCars) {
        const container = document.getElementById("gallery-container");
        container.innerHTML = "";

        filteredCars.forEach(car => {
            const figure = document.createElement("figure");
            figure.innerHTML = `
                <img src="${car.imageUrl}" alt="${car.carName}" loading="lazy">
                <figcaption>
                    <h2>${car.carName}</h2>
                    <p>Location: ${car.location}</p>
                    <p>Year: ${car.year}</p>
                    <p>Price: ${car.price}</p>
                </figcaption>
            `;
            container.appendChild(figure);
        });
    }

    document.getElementById("all").addEventListener("click", () => displayCars(cars));
    document.getElementById("new").addEventListener("click", () => displayCars(cars.filter(car => car.year >= 2022)));
    document.getElementById("old").addEventListener("click", () => displayCars(cars.filter(car => car.year < 2022)));
    document.getElementById("expensive").addEventListener("click", () => displayCars(cars.filter(car => parseInt(car.price.replace(/[^0-9]/g, "")) > 80000)));
    document.getElementById("affordable").addEventListener("click", () => displayCars(cars.filter(car => parseInt(car.price.replace(/[^0-9]/g, "")) <= 80000)));

    displayCars(cars);
});