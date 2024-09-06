let x;
let y=0;
document.getElementById('b1').onclick=function(){
    y=y+1;
    document.getElementById('box1').textContent=y;
}
document.getElementById('b3').onclick=function(){
    y=y-1;
    document.getElementById('box1').textContent=y;
}
document.getElementById('b2').onclick=function(){
    y=0;
    document.getElementById('box1').textContent=y;
}