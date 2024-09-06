document.getElementById('b').onclick=function(){
    let x;
    x=Math.floor(Math.random()*6)+1
    let y;
    y=Math.floor(Math.random()*6)+1
    let z;
    z=Math.floor(Math.random()*6)+1
    document.getElementById('l1').textContent=`${x}`
    document.getElementById('l2').textContent=`${y}`
    document.getElementById('l3').textContent=`${z}`
}