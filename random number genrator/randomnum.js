const min=1;
const max=100;
 let ran=Math.floor(Math.random()*(max-min+1));
 console.log(ran)
let attempt=0;
let guess;
let running=true;
let p;
while(running){
    guess=window.prompt(`guess the num btween ${min}-${max}`)
    guess=Number(guess)
    if(guess==ran){
        attempt=attempt+1;
        window.alert(`you won in ${attempt} attemps`)
        running=false;
    }
    else{
        attempt=attempt+1;
        if(guess>ran){
            window.alert(`toohigh`)
        }
        else{
            window.alert(`toolow`)
        }
    }

}
