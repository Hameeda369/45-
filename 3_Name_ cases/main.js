// Question# 3
// lower case
var personName = "Hameeda";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
