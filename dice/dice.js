function rolldice(){
    const dicenum=document.getElementById("numofdice").value
    const diceresult=document.getElementById("DiceResult")
    const diceimage=document.getElementById("DiceImage")
    const values=[]
    const images=[]
    for(let i=0;i<dicenum;i++){
        const value=Math.floor(Math.random()*6)+1;
        console.log(value)
        values.push(value);
        images.push(`<img src="dice/${value}.png">`);
    }
    diceresult.textContent=`dice ${values.join(", ")}`
    diceimage.innerHTML=images.join(" ")
}