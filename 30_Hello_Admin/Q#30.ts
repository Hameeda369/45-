//Question# 30

const user_Names: string[] = ['admin','CHOTA Bheem','TOM Jerry','Moto patlu','Masha'];


for(let i=0; i<userNames.length; i++){

    if(userNames[i] === 'admin'){

        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(`Hello ${userNames[i]},thank you for logging in again.`)
    }
}