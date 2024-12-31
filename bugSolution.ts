function greeter(person: string): string {
  return "Hello, "+ person +"!";
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); //Correct! 

//Alternative solution: Modify function signature to accept an array
function greeterArray(person: string[]): string {
    return "Hello, "+ person.join(" ") +"!";
  }
  
console.log(greeterArray(user)); //Correct!