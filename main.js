var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = document.getElementById("colour").value;
var will = "empty";
var shapes = "empty";
var pik = "deeppink";
var input_value = document.getElementById("slider").value;
canvas.addEventListener("mousedown", create);
function create(e){
 will = "mousedown";
 var mouse_x = e.clientX - canvas.offsetLeft;
 var mouse_y = e.clientY - canvas.offsetTop;
 if(shapes == "square"){
    square(mouse_x,mouse_y);
 }

 else if(shapes == "circle"){
    circle(mouse_x,mouse_y);
 }
 else if(shapes == "oval"){
    ovall(mouse_x,mouse_y);
 }
 else if(shapes == "rectangle"){
    rectangle(mouse_x,mouse_y);
 }
 else if(shapes == "triangle"){
    triangle(mouse_x,mouse_y);
 }
 else if(shapes == "trapo"){
    trapezo(mouse_x,mouse_y); 
 }
 document.getElementById("circle").style.backgroundColor = color;
 document.getElementById("square").style.backgroundColor = color;
 document.getElementById("oval").style.backgroundColor = color;
 document.getElementById("triangle").style.borderBottomColor = color;
 document.getElementById("tarpez").style.borderBottomColor = color;
 document.getElementById("rectangle").style.backgroundColor = color;
 
}
function circle(mouse_x,mouse_y){
    input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = input_value;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
function square(mouse_x,mouse_y){
    input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = input_value;
    ctx.rect(mouse_x-26,mouse_y,70,70);
    ctx.stroke();
}
function ovall(mouse_x,mouse_y){
    input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = input_value;
    ctx.ellipse(mouse_x,mouse_y,60,40,0, 0, 2*Math.PI);
    ctx.stroke();
}
function rectangle(mouse_x,mouse_y){
    input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = input_value;
    ctx.rect(mouse_x-50,mouse_y,100,60);
    ctx.stroke();   
}
function triangle(mouse_x,mouse_y){
    input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = input_value;
    ctx.moveTo(mouse_x-50,mouse_y);
    ctx.lineTo(mouse_x+50,mouse_y);
    ctx.lineTo(mouse_x+7,mouse_y-80);
    ctx.closePath();
    ctx.stroke();
}
function trapezo(mouse_x,mouse_y){
    input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= input_value;
    ctx.moveTo(mouse_x-40,mouse_y-30);
    ctx.lineTo(mouse_x+40,mouse_y-30);
    ctx.lineTo(mouse_x+80,mouse_y+30);
    ctx.lineTo(mouse_x-80,mouse_y+30);
    ctx.closePath();
    ctx.stroke();
}

canvas.addEventListener("mouseup", stop);
function stop(e){
    will = "mouseup";
    ctx.stroke();
    ctx.beginPath();
    ctx.closePath();
}
canvas.addEventListener("mouseout",stop);

canvas.addEventListener("mousemove",draw);
function draw(e){
    if(will == "mousedown"){
        if(shapes == "circle"){
        input_value = document.getElementById("slider").value;
        color = document.getElementById("colour").value;
        new_x = e.clientX - canvas.offsetLeft;
        new_y = e.clientY - canvas.offsetTop;
        console.log("coordinates X and Y : ");
        console.log("X = " + new_x + " Y = "+ new_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = input_value;
        ctx.arc(new_x,new_y,40,0,2*Math.PI);
        ctx.stroke();
    }
    else if(shapes == "square"){
        input_value = document.getElementById("slider").value;
    color = document.getElementById("colour").vaue;
    new_x = e.clientX - canvas.offsetLeft;
    new_y = e.clientY - canvas.offsetTop;
    console.log("coordinates of X and Y = ");
    console.log("X = "+new_x+" Y = "+new_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = input_value;
    ctx.rect(new_x-26,new_y,70,70);
    ctx.stroke();
    }
    else if(shapes == "oval"){
        color = document.getElementById("colour").value;
        input_value = document.getElementById("slider").value;
        new_x = e.clientX - canvas.offsetLeft;
        new_y = e.clientY - canvas.offsetTop;
        console.log("coordinates of X and Y = ");
        console.log("X = "+new_x+" Y = "+new_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = input_value;
        ctx.ellipse(new_x,new_y,60,40,0, 0, 2*Math.PI);
        ctx.stroke();
    }
    else if(shapes == "rectangle"){
        color = document.getElementById("colour").value;
        input_value = document.getElementById("slider").value;
        new_x = e.clientX - canvas.offsetLeft;
        new_y = e.clientY - canvas.offsetTop;
        console.log("coordinates of X and Y = ");
        console.log("X = "+new_x+" Y = "+new_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = input_value;
        ctx.rect(new_x-50,new_y,100,60);
         ctx.stroke(); 
    }
    else if(shapes == "triangle"){
        color = document.getElementById("colour").value;
        input_value = document.getElementById("slider").value;
        new_x = e.clientX - canvas.offsetLeft;
        new_y = e.clientY - canvas.offsetTop; 
        console.log("coordinates of X and Y = ");
        console.log("X = "+new_x+" Y = "+new_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = input_value;
        ctx.moveTo(new_x-50,new_y);
        ctx.lineTo(new_x+50,new_y);
        ctx.lineTo(new_x+7,new_y-80);
        ctx.closePath();
        ctx.stroke();
    }
    else if(shapes == "trapo"){
        color = document.getElementById("colour").value;
        input_value = document.getElementById("slider").value;
        new_x = e.clientX - canvas.offsetLeft;
        new_y = e.clientY - canvas.offsetTop; 
        console.log("coordinates of X and Y = ");
        console.log("X = "+new_x+" Y = "+new_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= input_value;
        ctx.moveTo(new_x-40,new_y-30);
        ctx.lineTo(new_x+40,new_y-30);
        ctx.lineTo(new_x+80,new_y+30);
        ctx.lineTo(new_x-80,new_y+30);
        ctx.lineCap = round;
        ctx.closePath();
        ctx.stroke(); 
    }
    }
    mouse_x = new_x;
    mouse_y = new_y;
}
function squr(){
    shapes = "square";
}
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function sqr(){
    shapes = "square";
}
function circ(){
    shapes = "circle";
}
function ova(){
    shapes = "oval";
}
function recta(){
    shapes = "rectangle";
}
function tra(){
    shapes = "trapo";
}
function tri(){
    shapes = "triangle";
}
function free(){
    shapes = "free_3333";
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function make(){
    input_value = document.getElementById("slider").value; 
}
function do_it(){
    input_value = document.getElementById("slider").value; 
    document.getElementById("range_value").innerHTML = input_value + "px";
}




