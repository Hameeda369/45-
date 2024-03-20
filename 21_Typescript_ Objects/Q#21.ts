//Question# 21

// Write a program that creates objects containing these items.

// Data type of person object
interface person_{
    age :number,
    name : string,
    nationality : string,
    student : boolean
}

//Person object
let  person_ : person = {
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
let car_ = {
    maker :'Maruti',
    colr : 'Black',
    automatic : true
}

// Print car
console.log(car);
