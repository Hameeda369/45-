//Question# 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in a array.Make sure the array is not in alphabetical order.
var places = ['karbala', 'Ajmeer Shreef', 'Damishq', 'Madina', 'Najaf'];
// Print your array in its original order.
console.log('Original ' + places);
//Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + __spreadArray([], places, true).sort());
//Show that your array is still in its original order by printing it.
console.log('Original ' + places);
//Print your arary in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('Original ' + places);
//Reverse the order of your list .Print the array to show that its order has changed.
console.log('Original ' + places.reverse());
//Reverse the order of your list again.Print the list to show its back to its original order.
console.log('Original ' + places.reverse());
//Sort your  array so its stored in alphabetical order.Print the array to show that its order has been  changed.
console.log('Original ' + places.sort());
//Sort to change your array so its stored in reverse alphabetical order.Print the list to show that its order has changed.
console.log('Original ' + places.sort().reverse());
