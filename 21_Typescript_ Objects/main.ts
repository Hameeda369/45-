//Question# 21

// Write a program that creates objects containing these items.

// Data type of person object
interface person{
    age :number,
    name : string,
    nationality : string,
    student : boolean
}

//Person object
let  person : person = {
    age : 29 ,
    name : 'Hameeda',
    nationality : 'Pakistan',
    student : true
}

//Print person
console.log(person);

//Data type of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean

}
//Car Object
let car = {
    maker :'Maruti',
    colr : 'Black',
    automatic : true
}

// Print car
console.log(car);
