//Write a JavaScript program to target a given value in a nested object based on the given key
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: { degree: 'Masters' }
}
let { id, name, age, education } = user;
console.log(id, name, age, education);
const person = {...user };
console.log(person);