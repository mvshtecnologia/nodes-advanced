import '../config/module-alias'
import { Person } from '@/person'

const person = new Person('Caio')
console.log(person.speak('Oslan Caio'))
console.log(person.speak())

const outherPerson = person
outherPerson.name = 'Dani'
console.log(outherPerson)
console.log(person)

const clonePerson = Object.create(person)
console.log(clonePerson)
