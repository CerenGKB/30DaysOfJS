let string = '30 days of javascript'

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(string)

//Print the length of the string on the browser console using console.log()
console.log('1-' + string.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log('2-' + string.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log('3-' + string.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log('4-' + string.substring(3,7))

//Split the string into an array using split() method
console.log('5-' + string.split(' '))

console.log('6-' + company.split(','))

console.log('7-' + string.replace('javascript', "Python"))