//1. Double the Numbers
const numbers = [2, 4, 6, 8];
let newNumbers = numbers.map(element => {
   return  element*2
} )
// let newNumbers = numbers.map(e => e*2)
console.log(newNumbers);

  //2.Name Greetings
  const names = ["Alice", "Bob", "Charlie"];
  let newNames = names.map((name)=>{
    return `HEllo, ${name}!`
  }) 
  console.log(newNames);

  //3. Object Property Extraction
  const people = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Anna", lastName: "Smith"},
    {firstName: "Peter", lastName: "Jones"}
 ];
 let newPeople = people.map((person)=>{
    return `${person.lastName}`
 })
 console.log(newPeople);

 //4.String Lengths Transform 
 const words = ["apple", "banana", "cherry"];
 let wordsLenght = words.map((word)=>{
    return `${word.length}`
 })
 console.log(wordsLenght);
 //5.  (OPTIONAL) Rendering a List in JSX (HTML)
 