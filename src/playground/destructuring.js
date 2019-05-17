            //  OBJECT DESTRUCTURING
// const person = {
//     name: 'Cristian',
//     age: 24,
//     location: {
//         city: 'Miami',
//         temp: 93
//     }
// }

// // const name = person.name
// // const age = person.age

// // Destructuring ES6
// const { name = 'Anonymous', age } = person

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'ego is the Enemy',
//     author: 'Ryan Holiday',
//     publish: {
//         name: 'Penguin'
//     }
// }

// const { name: PublisherName = 'Self-Published' } = book.publish

// console.log(PublisherName)



            //  ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state] = address 

console.log(`You are in ${city}, ${state}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [hotCoffee, smallPrice, mediumPrice, largePrice] = item

console.log(`A medium ${hotCoffee} costs ${mediumPrice}`)