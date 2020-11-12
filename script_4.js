const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log("Entrepreneurs nés dans les années 70:")
for(i=0; i<entrepreneurs.length; i++) {
  year = entrepreneurs[i].year
  if (year <= 1979 && year >= 1970){
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " est né en " + year);
  }
}

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("Prénom et le nom des entrepreneurs :")
entrepreneursNames = []
for(i=0; i<entrepreneurs.length; i++) {
  entrepreneursNames.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}
console.log(entrepreneursNames)

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("L'age qu'autait chaque inventeur aujourd'hui :")
for(i=0; i<entrepreneurs.length; i++) {
  year = entrepreneurs[i].year
  number = 2020 - year 
  console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " a/aurait " + number + " ans");
}

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Les entrepreneurs par ordre alphabétique du nom de famille:")
console.log(entrepreneurs.sort(function(a, b){
  if(a.last < b.last) { return -1; }
  if(a.last > b.last) { return 1; }
  return 0;
}))