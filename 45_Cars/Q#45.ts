//Question# 45

type Car_ = {
    manufacture: string
    model: string
    [key: string]: any;

}
function createCar(manufacture: string, model: string, optional: Record<string, any>): Car {
return{
    manufacture,
    model,
    ...optional
}
}
const mycar_:  Car = createCar("Toyata","Carolla", { color: "silver", year: "2023"})
console.log(mycar)
