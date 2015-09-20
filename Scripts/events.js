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