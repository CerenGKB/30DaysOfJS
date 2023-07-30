// Functions

// LEVEL 1 EXERCISES

// 1- Declare a function fullName and it print out your full name.

function fullName(){
    console.log("Ceren G")
}

//2 -Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function printName(firstName,lastName){
    console.log(firstName + " "+ lastName)
}
printName('Ceren','Go')

// 3 -Declare a function addNumbers and it takes two two parameters and it returns sum.

function sum(a,b){
    console.log( a + b)
}
sum(7,8)

// 4 - An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(a,b){
    const area = a * b
    return area
}

console.log(areaOfRectangle(5,4))

// 5 - A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function  perimeterOfRectangle(a,b){
    const perimeter = a * b
    return perimeter

}
console.log(perimeterOfRectangle(5,6))

// 6 - A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function  volumeOfPrism(length,width,height){
    const volume = length * width * height
    return volume

}

console.log(volumeOfPrism(5,6,7))

// 7 = Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r){
    const area = Math.floor(Math.PI * r**2)
    return area
}

console.log(areaOfCircle(6))



function circumferenceOfCircle(r){
    const circumference = Math.floor(Math.PI * 2* r)
    return circumference
}

console.log(circumferenceOfCircle(7))