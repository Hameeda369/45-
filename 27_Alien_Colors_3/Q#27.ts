
// Alien Colors #3: Turn your if_else chain from Exercise 5_4 into an if_else chain.

let  alien_Colors: string = "green";

//.If the alien is green,print a message that the player earned 5 points.

//Version 1 of the program
if(alienColors === "green"){
    console.log("Version 1:player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log(" player earned 10 points.");
}
else if(alienColors === "red"){
    console.log("player  earned 15 points.");
}
else{
    console.log("Please select right color")
}

//Version 2 of the program
alienColors = "yellow";

if(alienColors === "green"){
    console.log("player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log("Version 2: player earned 10 points.");
}
else if(alienColors === "red"){
    console.log("player  earned 15 points.");
}
else{
    console.log("Please select right color")
}

//Version 3 of the program
alienColors = "red";

if(alienColors === "green"){
    console.log("player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log(" player earned 10 points.");
}
else if(alienColors === "red"){
    console.log("Version 3:player earned 15 points.");
}
else{
    console.log("Please select right color")
}