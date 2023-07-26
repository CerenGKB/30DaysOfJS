
  // 1 -Iterate 0 to 10 using for loop, do the same using while and do while loop

  let zeroToTen = ''
  for(let i=0 ; i<=10 ; i++){
    zeroToTen += i + ' '
  }
  console.log(zeroToTen)

  // 2 - Iterate 10 to 0 using for loop, do the same using while and do while loop

  let tenToZero = ''
  for(let i=10 ; i>=0 ; i--){
    tenToZero += i + ' '
  }
  console.log(tenToZero)

  // 3 - Iterate 0 to n using for loop

  let zeroToN = ''
  let n = 20 

  for (let i = 0; i <= n; i++) {
     zeroToN += i + ' '
  }

  console.log(zeroToN) 

  // 4 - Write a loop that makes the following pattern using console.log()

  let a = 7
  let pattern = ''
  
  for (let i = 0; i < a; i++) {
      pattern += '#'
      console.log(pattern)
  }

   // 5 - Use loop to print the following pattern
  /*     0 x 0 = 0
      1 x 1 = 1
      2 x 2 = 4
      3 x 3 = 9
      4 x 4 = 16
      5 x 5 = 25
      6 x 6 = 36
      7 x 7 = 49
      8 x 8 = 64
      9 x 9 = 81
      10 x 10 = 100 */

    
    for(let i=0 ; i<=10 ; i++){
      console.log(`${i} x ${i} = ${i * i} `)
    }


    // 6 - Using loop print the following pattern
    /*  i    i^2   i^3
        0    0     0
        1    1     1
        2    4     8
        3    9     27
        4    16    64
        5    25    125
        6    36    216
        7    49    343
        8    64    512
        9    81    729
        10   100   1000 */
    console.log('i  i^2  i^3')
     for(let i=0 ; i<=10 ; i++){
      console.log(`${i}  ${i ** 2}    ${i ** 3} `)
     }   


    // 7 - Use for loop to iterate from 0 to 100 and print only even numbers

     const evenNumArr = []

    for(let i=0 ; i<=100 ; i++){
      if(i%2===0){
        evenNumArr.push(i)
      }
      continue
    }

    console.log('Even Numbers between 0-100 are ' + evenNumArr)


    // 8 -Use for loop to iterate from 0 to 100 and print only prime numbers

    const primeNumbers = [2]

    for(let i =3 ; i<= 100 ; i++){
      let isPrime = true
      for(let k = 2 ; k * k <= i ; k++){
        if(i%k ===0){
          isPrime = false;
          break
        }
      }
      if(isPrime) primeNumbers.push(i);
    }

    console.log('Prime numbers between 1-100 are ' + primeNumbers)


    // 9 - Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    let sumNum = 0

    for(let i=0; i<=100 ; i++){
      sumNum += i
    }

    console.log('The sum of all numbers from 0 to 100 is ' +sumNum)


    // 10 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    let sumOdd = 0

    for(let i=0 ; i<=100 ; i++ ){
      if(i%2 !== 0){
        sumOdd += i
      }
      continue
    }

    console.log('The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is ' + sumOdd)


    // 11 -Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    let sumArr = []

    let sumEvenNum = 0
    let sumOddNum = 0

    for(let i=0 ; i<= 100 ; i++){
      if(i%2 === 0){
        sumEvenNum += i
      }
      sumOddNum += i
    }

    sumArr.push(sumEvenNum,sumOddNum)

    console.log('Array of summation of even numbers and all numbers between 1-100 are ' +sumArr)

    // 12 - Develop a small script which generate array of 5 random numbers and the numbers must be unique


    const arrRandom = []

    
    for(let i=0 ; i<5 ; i++){
    let newElement = Math.floor(Math.random() * 10)
    arrRandom.push(newElement)
    }

    console.log('Array of random numbers ' + arrRandom)

    // 13 - Develop a small script which generate a six characters random id

    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'

    let id = ''
    for(let i=0 ; i<6 ; i++){
    let randomNum = Math.floor(Math.random() * chars.length)
    id += chars[randomNum]
    }

    console.log(id)