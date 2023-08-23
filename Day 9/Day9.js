// higher order function

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Use forEach to console.log each country in the countries array.
   

countries.forEach((country) => console.log(country))

/* 
Use map to create a new array by changing each country to uppercase in the countries array.
Use map to create an array of countries length from countries array.
Use map to create a new array by changing each number to square in the numbers array
*/

const upperCountry = countries.map((country) => country.toUpperCase())
console.log(upperCountry)

const lengthCoutry = countries.map((country => {return country.length}))
console.log(lengthCoutry)

const squaredNum = numbers.map((num) => num ** 2)
console.log(squaredNum)

/* 
Use filter to filter out countries containing land.
Use filter to filter out countries having six character.
Use filter to filter out countries containing six letters and more in the country array.
Use filter to filter out country start with 'E';
Use filter to filter out only prices with values.
*/

const lowerCaseCountries = countries.map((country) => country.toLowerCase() )

const landArr = lowerCaseCountries.filter((country) =>  country.includes('land'))
console.log(landArr)

const sixChar = countries.filter((country) => country.length === 6 )
console.log(sixChar)

