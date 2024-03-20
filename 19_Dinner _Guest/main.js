//Question# 19
//Question# 17
var guest_List = ['Kamran Tassori', 'Sir Zia', 'Sir Qasim', 'Sir Amin'];
var absent_guest = 'Sir Ahmed Raza';
var new_guest = 'Sir Imran Ali';
guest_List[0] = new_guest;
guest_List.unshift('Farooq Sattar');
guest_List.splice(2, 0, 'khalid Maqbool');
guest_List.push('Mustafa kamal');
for (var i = 0; i < guest_List.length; i++)
    while (guest_List.length > 2) {
        var remove_guest = guest_List.pop();
    }
guest_List.splice(0, 2);
console.log(guest_List);
//exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log("Total number of guest are: ".concat(guest_List.length));
