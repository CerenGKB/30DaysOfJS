

// 1 - create an empty array
const newArr = []

// 2- create an array with more than 5 numbers of el
const newArrNums = [1,2,3,4,5,6]

// 3- Find the length of your array
console.log("Length of array is " + (newArrNums.length))

//4- Get the first item, the middle item and the last item of the array
console.log('First element is ' + newArrNums[0]) //first index
let middleEl = Math.floor(newArrNums.length / 2)
console.log('Middle element is ' + middleEl)
let lastEl = newArrNums.length - 1
console.log('Last Element is ' + lastEl)


// 5 -Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1,2,3,"ice cream" , 'pen' ,'kebab']

// 6 - Declare an array variable itCompanies somerandom and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google' ,'Microsoft' ,'Apple', "IBM","Oracle", "Amazon"]

// 7- Print the array using console.log()
console.log("Company array is " + itCompanies)

// 8 - Print the number of companies in the array

console.log("Number of companies in the array is " +itCompanies.length)

// 9 - Print the first company, middle and last company
console.log('First Company is ' + itCompanies[0]) //first index
let middleCompany = Math.floor(newArrNums.length / 2)
console.log('Middle Company is ' + itCompanies[middleCompany])
let lastCompany = newArrNums.length - 1
console.log('Last Company is ' + itCompanies[lastCompany])

// 10 - Print out each company
console.log(...itCompanies)

// 11 -Change each company name to uppercase one by one and print them out
const upperCaseArr = itCompanies.map(element => element.toUpperCase())
console.log('Array with uppercase is: ' + upperCaseArr)