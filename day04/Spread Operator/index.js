let contacts = ['Mary', 'Joel', 'Danny'];
// let personalFirends = ["David", "Mary", "Joel", "Danny", "Lily"];

let personalFirends = ["David", ...contacts, "Lily"];

console.log(personalFirends);

let person = {
    name: 'Adam',
    age: "25",
    city: "Manchester"
}

// let employee = {
//     name: "Adam",
//     age: "25",
//     city: "Manchester",
//     salary: 5000,
//     position: "Software Developer"
// }

let employee = {
    ...person,
    salary: 5000,
    position: "Software Developer"
}

console.log(employee);