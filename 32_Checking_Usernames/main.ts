//Question# 32

let current_users : string[] = ["adMin","AlI","FareEda","Faizan","Babar"];
let new_users : string[] = ["adMin","babar","Naheed","Razia","Hasnain"];

 new_users.forEach(newUsername  =>{

   let lowercase: string = newUsername.toLowerCase();
   if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
      console.log(`The username ${newUsername} is not available.Please write a different username`);
   }
   else{
      console.log(`The username ${newUsername} is available.`);
   }


 });
