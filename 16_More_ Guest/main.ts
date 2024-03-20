//Question# 16

let guest_List:string[] = ['Kamran Tassori','Sir Zia','Sir Qasim','Sir Amin'];

let absent_guest :string ='Sir Ahmed Raza';

let new_guest :string ='Sir Imran Ali' ;

guest_List[0] = new_guest ;



for(let i=0; i<guest_List.length; i++){

console.log('Dear Mr. ' + guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')

}
console.log(`Mr. ${absent_guest} is not coming to the party.`);

console.log('Good News!We find big table so we are inviting 3 more guests.')

guest_List.unshift('Farooq Sattar');
guest_List.splice(2,0,'khalid Maqbool');
guest_List.push('Mustafa kamal');



for(let i=0; i<guest_List.length; i++){

    console.log('Dear Mr. ' + guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
    }