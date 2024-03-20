//questuin# 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log(" -".concat(items[i]));
    }
}
console.log("Enjoy your sandwich Hameeda Gul");
sandwich('chicken', 'Tomata', 'Vegetable');
sandwich('Garlic chicken', 'Mayo garlic');
sandwich('Beef', 'Cheese');
