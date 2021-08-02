canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
color="pink";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",pendown);
function pendown(e){
    color=document.getElementById("color").value ;
    console.log(color);

    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("x="+mousex+"y= "+mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mousex,mousey,50,0,2*Math.PI);
    ctx.stroke(); 
}
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }