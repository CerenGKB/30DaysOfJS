// Exercises Level 1
/* 
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway'] */

// 1 - create an empty set

let objectSet = new Set();

// 2- Create a set containing 0 to 10 using loop

let numbers = new Set()

for(let i= 0; i<=10 ; i++){
    numbers.add(i)
}

// 3 - Remove an element from a set

numbers.delete(3)

// 4 - Clear a set

numbers.clear()

// 5 - Create a set of 5 string elements from array

let stringElements = new Set()
for(let i =0 ; i < 5 ; i++){
    stringElements.add(countries[i])
}

// 6 - Create a map of countries and number of characters of a country

let countriesMap = new Map()
for(let country of countries){
    countriesMap.set(country, country.length)
}



