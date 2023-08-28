const countries = [
    ['Finland', 'Helsinki','Sweden', 'Stockholm']
  ]

  const countriesObject = {
    NorthAmerica: "Canada",
    Europe: "Germany",
    Asia: "Korea",
    Africa: "Egypt",
    SouthAmerica: "Brasil"
  }


//Display the countries array as a table.

console.table(countries)


//Display the countries object as a table.

console.table(countriesObject)


//. Use console.group() to group logs:

console.group("Countries Data");

console.group("Countries Array");
console.table(countries);
console.groupEnd();

console.group("Countries Object");
console.table(countriesObject);
console.groupEnd();

console.groupEnd();