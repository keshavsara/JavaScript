 const name = "KeshavSara"
 const repoCount = 10

 //Console.log(name +repoCount +" Value");

 console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //This type is know as string interpolation

 const gameName = new String('keshav-sara')

//  console.log(gameName);
//  console.log(gameName[0]);
//  console.log(gameName.__proto__);
 
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));

 console.log(gameName.indexOf('s'));
 const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
 console.log(anotherString);
 
 
const newStringOne = "     keshav    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes the starting and ending spaces

const url = "https://keshav.com/keshav%20sara"
console.log(url.replace('%20','_'));
 
console.log(url.includes('keshav'))

console.log(gameName.split('_'));
