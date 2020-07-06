var numsquare = 6;
var colors = generateRandomColor(numsquare);
var squares = document.querySelectorAll(".square");
var selected = pickColor();
var colordipslay = document.getElementById("colordisplay");
colordipslay.textContent = selected; 
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");


easybtn.addEventListener("click", function(){
    easybtn.classList.add ("selected");
    hardbtn.classList.remove ("selected");
    numsquare = 3;
    colors = generateRandomColor(numsquare);
    selected = pickColor();
    colordipslay.textContent = selected;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
    }
})

hardbtn.addEventListener("click", function(){
    hardbtn.classList.add ("selected");
    easybtn.classList.remove ("selected");
    numsquare = 6;
    colors = generateRandomColor(numsquare);
    selected = pickColor();
    colordipslay.textContent = selected;
    for(var i=0; i<squares.length; i++){
        
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            
        
        
    }
})



reset.addEventListener("click", function() {
    colors = generateRandomColor(numsquare);
    selected = pickColor();
    colordipslay.textContent = selected;
    this.textContent = "New Colors"
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#4682B4";
    message.textContent ="";
    
})

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      
      if (clickedColor === selected) {
          message.textContent ="correct";
          reset.textContent = "Play again"
          changeColor(clickedColor);
          h1.style.backgroundColor = clickedColor;
      } else{
          this.style.backgroundColor = "#232323";
          message.textContent = "try again";
      }
    })
}

function changeColor(colors){
    for(var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr =[]
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
   var r = Math.floor(Math.random()* 256);
   var g = Math.floor(Math.random()* 256);
   var b = Math.floor(Math.random()* 256);
   return "rgb(" + r + ", " + g + ", " + b +")"; //careful with the spacings 
}