/*
public methods:

init() - Initialize the Canvas, calling the drawCanvas function

drawCanvas() - Draw the canvas grid system according to the configuration 
variable s

Variables:

canvas - main canvas of the game

c - canvas context

s - screen configuration setup
s.rows - number of rows in the grid system
s.cols - number of cols in the grid system
s.height - height in pixels of each grid cell
s.width - width in pixels of each grid cell

mX - mouse position in X axis, starts in the top left corner

mY - mouse position in Y axis, starts in the top left corner

clickedX - mouse position in X axis when mouse left button is pressed

clickedY - mouse position in Y axis when mouse left button is pressed

*/

var s = {
              rows: 10,
              cols: 10,
              width: 30,
              height: 30   
            };

            var c;

            window.onload = function(){
              var canvas = document.getElementById("myCanvas");    
              c = canvas.getContext("2d");

              init();
            };

      //   function getMousePos(canvas) {
      //   var rect = canvas.getBoundingClientRect();
      //   return {
      //     x: evt.clientX - rect.left,
      //     y: evt.clientY - rect.top
      //   };
      // }
            // var mousePosition;
            var mX;
            var mY;
            var clickedX;
            var clickedY;

            window.onclick = function(e){
           
              mX = e.pageX;
              mY = e.pageY;
             
              console.log(mX + "," + mY);

              if(Math.floor(mX/s.width) < s.cols && Math.floor(mY/s.height) < s.rows){
                clickedX = Math.floor(mX/s.width);
                clickedY = Math.floor(mY/s.height);
                console.log(clickedX + "," + clickedY);
              }  
            };

            var box;
            box = new Image();
            box.src = "box.png";

            function init(){
              drawCanvas();      
            }

            function drawCanvas(){
              c.clearRect(0, 0, 400, 400);

              for (var i = 0; i < s.rows; i++) {
                for (var n = 0; n < s.cols; n++) {
                  var x = n*s.width;
                  var y = i*s.height;
                  c.drawImage(box, x, y);        
                 } 
              }
            }    