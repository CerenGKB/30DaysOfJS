

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

// 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


const lastCompanyInArr = itCompanies[itCompanies.length - 1];
const otherCompanies = itCompanies.slice(0, itCompanies.length - 1).join(', ')

console.log(`${otherCompanies} and ${lastCompanyInArr} are big IT companies.`)

// 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function findCompany(companyName) {
    if (itCompanies.includes(companyName)) {
        return `${companyName} exists in our data`
    } else {
        return `${companyName} is not found.`;
    }
}
console.log(findCompany('Facebook'))
console.log(findCompany('Starbucks'))


// 14 - Filter out companies which have more than one 'o' without the filter method

const regex = /.*[oO].*[oO].*/;

let result = itCompanies.filter(company => regex.test(company));

console.log("Companies with at least 2 \"O\" letter in them are " + result);

// 15 - Sort the array using sort() method

console.log("Sorted array ıs " + itCompanies.sort())

// 16 - Reverse the array using reverse() method

console.log("Reversed array is " + itCompanies.reverse())

// 17 - Slice out the first 3 companies from the array

console.log("Array without first 3 items are " + itCompanies.slice(3))

// 18 - Slice out the last 3 companies from the array

console.log("Array without last 3 items are " + itCompanies.splice(0,itCompanies.length - 3))

// 19 - Slice out the middle IT company or companies from the array

const companyInMiddle = Math.floor(itCompanies.length / 2 )

console.log("Company in the middle is " + itCompanies[companyInMiddle])

// 20 - Remove the first IT company from the array

const  newItCompanies = ['Facebook', 'Google' ,'Microsoft' ,'Apple', "IBM","Oracle", "Amazon"]
/* 
newItCompanies.shift()
console.log("Array without first item is " + newItCompanies )
 */


// 21 - Remove the middle IT company from array

const companyMiddle = Math.floor(newItCompanies.length / 2 )

console.log(newItCompanies.splice(companyMiddle, 1))

// 22 - Remove the last IT company from the array

let lastCompanyInArray = newItCompanies.pop();

console.log("Array without last item is " + newItCompanies)

// 23 - Remove all

console.log(newItCompanies.splice(0,newItCompanies.length))


// Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sumOfAges = 0

for(let i =0 ; i < ages.length ; i++){
    sumOfAges += ages[i]
}

let averageAge = Math.floor(sumOfAges / ages.length)
console.log(averageAge)