//Question# 41

function show_magicians(magicians: string[]) : void{
    for (const magician of magicians) {
console.log(magician.charAt(0).toUpperCase( ) + magician.slice(1));

    }
}
const magician: string[] = ["Stalin","Jack","Herry"];
show_Magicians(magician_)



//Question# 42

function make_Great(magicians: string[]) : void{
    for (let i = 0; i< magicians.length; i++){
        magicians[i] = magicians[i] +  ' the great'
    }
}
const magicians_2: string[] = ["Stalin","Jack","Herry"];
make_great(magicians2)
show_Magicians(magicians2)


//Question# 43

function make_Great2(magicians: string[]): string[]{
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i]) + 'the great';
        
    }
    return greatMagicians;
}
const magicians_3: string[] = ['Stalin','Jack','Herry'];
const greatMagicians_2: string[ ] =make_great2(magicians3);
show_Magicians(magicians3)
show_Magicians(greatMagicians2);























