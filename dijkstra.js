//Welcome to the famous Dijktra's Algorithm. This famous algorithm finds the shortest or cheapest or really whatever weight 
// you want to sort a graph and its edges by. In my introduction to the algorithm in "A Common Sense Guide to Data Structures and Algorithms" 
// it was introduced as the cheapest path from Atlanta to Chicago. 
// This code solves exactly that problem and can take in any starting city and ending city and can find the cheapest path with the given data.

// The code was presented in the book in Ruby so I worked with GPT to translate to JS. 
// The process was a bit complicated since JS doesn't have some of the methods that Ruby has and I had to implement with loops.

// Without further a do, enjoy!

class City {
    constructor(name) {
        this.name = name;
        this.routes = {};
    }

    addRoute(city, price) {
        this.routes[city.name] = price;
    }
}

let atlanta = new City("Atlanta");
let boston = new City("Boston");
let chicago = new City("Chicago");
let denver = new City("Denver");
let elPaso = new City("El Paso");

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);
elPaso.addRoute(boston, 100);

const dijkstraShortestPath = (startingCity, finalDestination) => {
    const cheapestPricesTable = {};
    const cheapestPreviousStopoverCityTable = {};
    const unvisitedCities = [atlanta, boston, chicago, denver, elPaso];
    const visitedCities = {};

    cheapestPricesTable[startingCity.name] = 0;
    let currentCity = startingCity;

    while (currentCity !== undefined && currentCity !== null) {
        visitedCities[currentCity.name] = true;
        unvisitedCities.splice(unvisitedCities.indexOf(currentCity), 1);

        Object.entries(currentCity.routes).forEach(([adjacentCityName, price]) => {
            const adjacentCity = unvisitedCities.find(city => city.name === adjacentCityName);
            if (adjacentCity && !visitedCities[adjacentCityName]) {
                const priceThroughCurrentCity = cheapestPricesTable[currentCity.name] + price;
                if (cheapestPricesTable[adjacentCityName] === undefined || priceThroughCurrentCity < cheapestPricesTable[adjacentCityName]) {
                    cheapestPricesTable[adjacentCityName] = priceThroughCurrentCity;
                    cheapestPreviousStopoverCityTable[adjacentCityName] = currentCity.name;
                }
            }
        });

        currentCity = unvisitedCities.reduce((minCity, city) => {
            if (minCity === null || (cheapestPricesTable[city.name] !== undefined && cheapestPricesTable[city.name] < cheapestPricesTable[minCity.name])) {
                return city;
            } else {
                return minCity;
            }
        }, null);
    }

    let shortestPath = [];
    let currentCityName = finalDestination.name;

    while (currentCityName !== startingCity.name) {
        shortestPath.push(currentCityName);
        currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
    }
    shortestPath.push(startingCity.name);
    return shortestPath.reverse();
};

console.log(dijkstraShortestPath(atlanta, elPaso).join(" -> "));
