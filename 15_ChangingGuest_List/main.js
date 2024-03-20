//Question# 15
var guest_List = ['Kamran Tassori', 'Sir Zia', 'Sir Qasim', 'Sir Amin'];
for (var i = 0; i < guest_List.length; i++) {
    console.log('Dear Mr. ' + guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
var absent_guest = 'Sir Ahmed Raza';
var new_guest = 'Sir Imran Ali';
guest_List[0] = new_guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log('Dear Mr. ' + guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log("Mr. ".concat(absent_guest, " is not coming to the party."));
