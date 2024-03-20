//questuin# 44

function sandwich(...items: string[]): void{
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(` -${items[i]}`)
    }
}
console.log("Enjoy your sandwich Hameeda Gul")
sandwich('chicken','Tomata','Vegetable')
sandwich('Garlic chicken','Mayo garlic')
sandwich('Beef','Cheese')