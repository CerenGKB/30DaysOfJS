import {users} from './data.js'
import {users as usersNew, products} from './data2.js'

const dog = {

}

console.log(dog)

dog.name ='tarcin',
dog.legs =4,
dog.color ='white',
dog.bark = function(){ return 'woof woof'}

console.log(dog)

// Find the person who has many skills in the users object.

let skillNum 
let maxSkill = 0
let skilledUser
for (let username in users) {
    skillNum =  users[username].skills.length
    if(skillNum > maxSkill){
        maxSkill = skillNum
        skilledUser = username
    }
}

console.log(skilledUser + 'has the highest skill number with ' + maxSkill + ' skills')


//Count logged in users, count users having greater than equal to 50 points from the following object.

let count = 0 
for(let user in users){
    if(users[user].isLoggedIn && users[user].points >= 50){
        count++
    }
}

console.log('Number of logged in users with 50 or move points is '+ count)

//Find people who are MERN stack developer from the users object


const mernStackArr = []
for (let user in users) {
    const skills = users[user].skills;
    if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
        mernStackArr.push(user)
    }
}

console.log('Mern Stack developers are ' + mernStackArr)

// Set your name in the users object without modifying the original users object

const Ceren={
    mail: 'ceren@gmail'
}

let myUser = Object.assign({}, users, {Ceren})

console.log(myUser)


//Get all keys or properties of users object

console.log(Object.keys(users))

//Get all the values of users object

console.log(Object.values(users))

//Use the countries object to print a country name, capital, populations and languages.

const countries = {
    Turkey: {
        capital: "Ankara",
        population: 78200000,
        languages: ["Turkish"]
    },
    France: {
        capital: "Paris",
        population: 67060000,
        languages: ["French"]
    }
}

for(let country in countries){
    console.log('Countries: ' + country)
    console.log('Capital ' + countries[country].capital)
}

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

function totalIncome() {
    return this.incomes.reduce((total, income) => total + income, 0);
}

function totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense, 0);
}

function accountInfo() {
    return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
}

function addIncome(amount) {
    this.incomes.push(amount);
}

function addExpense(amount) {
    this.expenses.push(amount)
}

function accountBalance() {
    return this.totalIncome() - this.totalExpense();
}

const personAccount = {
    firstName : 'Ceren',
    lastName : 'Gokbulut',
    incomes : [],
    expenses: [],
    totalIncome,
    totalExpense,
    accountInfo,
    addIncome,
    addExpense,
    accountBalance
}

personAccount.addIncome(5000);
personAccount.addIncome(200);
personAccount.addExpense(1500);
personAccount.addExpense(200);

console.log(personAccount.accountInfo());
console.log("Account Balance:", personAccount.accountBalance());


/* Imagine you are getting the usersNew and products collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application */

const signUp = (username) => {
    
    const doesExist = usersNew.find(user => user.username == username);
    
    if (doesExist) {
    console.log(`You already have an account ${username}!`);
    return;
    }else{
    const newUser = {
        username
    }
    usersNew.push(newUser);
    console.log(`Successfully signed up!, Welcome ${username}`);
    };

    
}

signUp('Martha')
signUp('Ceren')


const signIn = ({username,password}) => {

  const user = usersNew.find(u => u.username === username && u.password === password);

  if(user.isLoggedIn){
      console.log(`You are already logged in ${username}!`);
  } else if(!user.isLoggedIn){
    console.log(`Welcome ${username}`)
  }else{
    console.log('You dont have an account')
  }


}

signIn({username: 'Martha', password: '123222'})
signIn({username: 'Brook', password:'123111'})