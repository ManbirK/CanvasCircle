/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/


//Get reference of canvas created.

mycanvas = document.getElementById("Canvas1");
ctx = mycanvas.getContext("2d");

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(400,200,50,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.lineWidth = 3;
ctx.arc(250,100,50,0,2*Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(350,200,50,0,2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.

mycanvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;

    //additional activity ends
    //Get the x and y coordinates when the mouse is clicked.
    mouse_x = e.clientX-mycanvas.offsetLeft;
    mouse_y = e.clientY-mycanvas.offsetTop;
        
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //Call the "circle()" function with mouse_x and mouse_y as parameters.  
    circle(mouse_x,mouse_y);

}


function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
}
	
