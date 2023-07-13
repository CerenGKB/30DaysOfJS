//DAY 2 - EXERCISES LEVEL 1

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let string = '30 days of javascript'

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(string)

//Print the length of the string on the browser console using console.log()
console.log('2- ' + string.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log('3- ' + string.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log('4- ' + string.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log('5- ' + string.substring(3,7))

//Split the string into an array using split() method
console.log('6- ' + string.split(' '))

//Cut (slice) out the first word of the string using substr() or substring() method
console.log('7- ' + company.substring(0,8))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('8- ' + string.substr(0,3))

//Check if the string contains a word Script using includes() method
console.log('9- ' + string.includes('Script'))

//Split the string into an array using split() method
console.log('10- ' + string.split(''))

//Split the string 30 Days Of JavaScript at the space using split() method
console.log('11- ' + string.split(' '))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('12- ' + company.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('13- ' + string.replace('days','Weeks'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('14- ' + string.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log('15- ' + string.charCodeAt(11))

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log('16- ' + string.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('17- ' + string.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log('18- ' + because.indexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('19- ' + because.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript 
console.log('20- ' + string.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('21- ' + string.startsWith('30'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('22- ' + string.endsWith('script'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
let aRegex= /a/g
console.log('23- ' + string.match(aRegex))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstString = '30 Days of '
console.log('24- ' + firstString.concat('Javascript'))


//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('25- ' + string.repeat(2))