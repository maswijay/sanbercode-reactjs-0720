console.log(' ');
console.log('----- SOAL 1 -----')
const newFunction = function literal(firstName, lastName){
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + ' ' + lastName)
            return this.fullName
        }
        
    }
}

newFunction('William', 'Imoh').fullName()

console.log(' ');
console.log('----- SOAL 2 -----')
const newObject = {
    firstName: 'Harry',
    lastName: 'Potter Holt',
    destination: 'Hogwarts React Conf',
    occupation: 'Deve-wizard Avocado',
    spell: 'Vimulus Renderus!!!'
}

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation)

console.log(' ');
console.log('----- SOAL 3 -----')
const west = ['Will', 'Chris', 'Sam', 'Holly']
const east = ['Gill', 'Brian', 'Noel', 'Maggie']

let combined = [...west, ...east]
console.log(combined)


































