const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

//********************************** PART 1 - FOREACH **********************************/
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planetEl.innerHTML = "<h2>List of Planets:</h2>"

planets.forEach(planet => {
  // Set the content of a section with an id of planets to the following (after the heading)
  planetEl.innerHTML += `${planet} `
});

//************************************ PART 2 - MAP ************************************/
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const mapEl = document.getElementById("maps")
mapEl.innerHTML = "<h2>List of Capitalized Planets:</h2>"

const upperRocks = planets.map(function (planet) {
    // Set the maps container to the Uppercase Planets
    // Selects the first character of each planet and capitalizes it.
    // planet.slice allows you to stop the capitalization after the first letter.
    mapEl.innerHTML += `${planet.charAt(0).toUpperCase()}${planet.slice(1)} `
})


//********************************** PART 3 - FILTER **********************************/
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const easyEl = document.getElementById("easy")
easyEl.innerHTML = "<h2>List of planets with the letter 'e':</h2>"

const ePlanets = planets.filter(planet => {
    if (planet.indexOf('e') > -1)
    easyEl.innerHTML += `${planet.charAt(0).toUpperCase()}${planet.slice(1)} `
})


//********************************** PART 4 - REDUCE **********************************/

// Use the reduce method to create a sentence from the words in the following array
const reduceEl = document.getElementById("reduce")
reduceEl.innerHTML = "<h2>Sentence:</h2>"

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce((now, next) => {
    let structure = now += ` ${next}`
    reduceEl.innerHTML += structure
    })