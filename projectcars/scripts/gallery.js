document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        {
            carName: "Tesla Model S",
            location: "California, USA",
            year: 2022,
            price: "$89,990",
            imageUrl: "images/tesla_model_s.webp"
        },
        {
            carName: "Ford Mustang",
            location: "Michigan, USA",
            year: 2021,
            price: "$55,300",
            imageUrl: "images/Ford_Mustang.webp"
        },
        {
            carName: "Chevrolet Camaro",
            location: "Detroit, USA",
            year: 2020,
            price: "$42,500",
            imageUrl: "images/сhevrolet_camaro.webp"
        },
        {
            carName: "BMW M3",
            location: "Munich, Germany",
            year: 2023,
            price: "$70,895",
            imageUrl: "images/bmw_m3.webp"
        },
        {
            carName: "Audi R8",
            location: "Ingolstadt, Germany",
            year: 2022,
            price: "$158,600",
            imageUrl: "images/audi_r8.webp"
        },
        {
            carName: "Porsche 911",
            location: "Stuttgart, Germany",
            year: 2023,
            price: "$107,550",
            imageUrl: "images/porsche_911.webp"
        },
        {
            carName: "Mercedes-Benz S-Class",
            location: "Stuttgart, Germany",
            year: 2022,
            price: "$111,100",
            imageUrl: "images/mercedes_class_s.webp"
        },
        {
            carName: "Toyota Supra",
            location: "Toyota City, Japan",
            year: 2022,
            price: "$43,540",
            imageUrl: "images/toyota_supra.webp"
        },
        {
            carName: "Honda Civic Type R",
            location: "Tokyo, Japan",
            year: 2023,
            price: "$44,795",
            imageUrl: "images/honda_civic.webp"
        },
        {
            carName: "Nissan GT-R",
            location: "Yokohama, Japan",
            year: 2022,
            price: "$113,540",
            imageUrl: "images/nissan.webp"
        },
        {
            carName: "Lamborghini Huracan",
            location: "Sant'Agata, Italy",
            year: 2023,
            price: "$208,571",
            imageUrl: "images/lamborghini_huracan.webp"
        },
        {
            carName: "Ferrari 488",
            location: "Maranello, Italy",
            year: 2022,
            price: "$274,280",
            imageUrl: "images/ferrari_488.webp"
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