//Question# 41
function show_Magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
var magician_ = ["Stalin", "Jack", "Herry"];
show_Magicians(magician_);
//Question# 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["Stalin", "Jack", "Herry"];
make_great(magicians2);
show_Magicians(magicians2);
//Question# 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i]) + 'the great';
    }
    return greatMagicians;
}
var magicians3 = ['Stalin', 'Jack', 'Herry'];
var greatMagicians2 = make_great2(magicians3);
show_Magicians(magicians3);
show_Magicians(greatMagicians2);
