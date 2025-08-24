function mostSpokenLanguages (countries, n) {
   let arr = [... countries]

   arr.sort ((a, b) => {
    return Object.values(b)[0] - Object.values(a)[0]
   })

   return arr.slice(0, n)
}

let countries = new Set([
  { Russian: 9 },
  { English: 91 },
  { French: 45 },
  { Spanish: 24 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Arabic: 25 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
]);

console.log(mostSpokenLanguages(countries, 3));
