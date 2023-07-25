const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


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