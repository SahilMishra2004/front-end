function genratepassword(passwordlenght,includelowercase,includeuppercase,includenumber,includesymbols){
    const lowercase="abcdefghijklmnopqrstuvwxyz"
    const uppercase="ABCDEFGHIJKLMONPQRSTUVWXYZ"
    const number="1234567890"
    const symbol="!@#$%^&*/?~`"
    let allowedvhar=""
    let password=""
    allowedvhar += includelowercase ? lowercase:" ";
    allowedvhar += includeuppercase ? uppercase:" ";
    allowedvhar += includenumber ? number:" ";
    allowedvhar += includesymbols ? symbol:" ";
    if(passwordlenght<0){
        return `(Password length must  be greater than 1)`
    }
    else if(allowedvhar===0){
        return`(atleast one must be selected)`
    }
    for(let i=0;i<passwordlenght;i++){
        const randomindex=Math.floor(Math.random()*allowedvhar.length)
        password += allowedvhar[randomindex]
    }
    return password
    
}



const passwordlenght=12;
const includelowercase=true
const includeuppercase=true
const includenumber=true
const includesymbols=true

const password=genratepassword(passwordlenght,includelowercase,includeuppercase,includenumber,includesymbols)
console.log(`password genrated is ${password}`)