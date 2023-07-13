//Level 1 Exercises

// 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Ceren'
let lastName = 'Gokbulut'
let country = 'Turkey'
let city = 'Manisa'
let age = 26
let isMarried = false 
let year = 2023

console.log('1- ' + typeof firstName,
            typeof lastName,
            typeof age,
            typeof isMarried
            )

// Check if type of '10' is equal to 10
console.log('2- ' + (typeof 10 == '10'))

// Check if parseInt('9.8') is equal to 10
console.log('3- ' + (parseInt('9.8') == 10))

// Boolean value is either true or false.
console.log('4- Yes Boolean values are either true or false ' )

// 5- Write three JavaScript statement which provide truthy value.
let truthy1 = 8 
let truthy2 = 'manavgat'
let truthy3 = false

// Write three JavaScript statement which provide falsy value.
let falsy1 = 0
let falsy2 = null
let falsy3 = ''

//7- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log('8- ' + (4 > 3) )
console.log('9- ' + (4 >= 3) )
console.log('10- ' + (4 < 3 ))
console.log('11- ' + (4 <= 3) )
console.log('12- ' + (4 == 4) )
console.log('13- ' + (4 === 4 ))
console.log('14- ' + (4 != 3 ))
console.log('15- ' + (4 !==4 ))
console.log('16- ' + (4 != '4'))
console.log('17- ' + (4 !== '4') )
console.log('18- ' + (4 === '4') )


// 19- Find the length of python and jargon and make a falsy comparison statement.
let string1 = 'python'
let string2 = 'jargon'
console.log('19- ' + (string1.length !== string2.length))


// 20- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()


console.log('21- ' + (4 > 3 && 10 < 12) )
console.log('22- ' + (4 > 3 && 10 > 12) )
console.log('23- ' + (4 > 3 || 10 < 12 ))
console.log('24- ' + (4 > 3 || 10 > 12) )
console.log('25- ' + (!(4 > 3)) )
console.log('26- ' + (!(4 < 3) ))
console.log('27- ' + (!(false)))
console.log('28- ' + (!(4 > 3 && 10 < 12)))
console.log('29- ' + (!(4 > 3 && 10 > 12)))
console.log('30- ' + (!(4 === '4')) )



// There is no 'on' in both dragon and python
let value1 = 'dragon'
let value2 = 'python'
console.log('31- ' + (value1.includes('on') && value2.includes('on')))


// 32- Use the Date object to do the following activities
const now = new Date()

// What is the year today?
console.log('32- ' + now.getFullYear())

// What is the month today as a number?
console.log('33- ' + now.getMonth())

// What is the date today?
console.log('35- ' + now.getDate())

// What is the day today as a number?
console.log('36- ' + now.getDay())

// What is the hours now?
console.log('37- ' + now.getHours())

// What is the minutes now?
console.log('38- ' + now.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log('39- ' + now.getTime())