//Question# 26
// Alien colors #2: Choose a color for an alien as you did in Exercise #25
var alienColors = "green";
//Write an if_else chain.
// If the alien's color is green
// Print a statement that the player just earned 5 points for shooting the alien.
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
//  . If the alien color isn't green, print a statement that the player just earned 10 points.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
