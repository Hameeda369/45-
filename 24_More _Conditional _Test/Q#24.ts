//Question# 24

// Equality and Inequalibility Test# 1
console.log("Equality test with strings:","Orange" ==="Orange");
// Equality and Inequalibility Test# 2
console.log("Inequality test with strings: ",("Orange" as  string) != " Banana");

// Tests using the lower case function
console.log("Lower Case function tests:", "HI".toLowerCase() === "hi");

// Numerical tests involving equality and inequality
console.log("Equality test with numbers:", 26 === 26);
// numerical test involving inequality
console.log("Inequality test with numbers:", (26 as number) != 35);


// Greater than test
console.log("Greater than test", 10 >5);
//less than test
console.log("Less than test:", 5 < 10);

//Greater than or equal to
console.log("Greater than and equal to test:", 10 >= 10);
// Less than or equal to
console.log("less than or equal to test:", 5<= 10);

// Tests using "and"  operator
console.log("And operator test:", 5===5 && 10 > 5);
// Tests using "or" operator
console.log("Or operator test:", 5===5 || false );

// Test whether an item is in a array
const fruits_ :string[] = ['Pineapple','Mango','Grapes'];
console.log('Test "Pineapple" in the array:',fruits.includes("Pineapple"));

//Test wheter an item is not in array
console.log('Testing "Apple" is not in array:', !fruits.includes('Apple'));





