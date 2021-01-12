const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");


console.log(ctx);

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

/*array to save the bodies*/
let score = 0; 
let sequer = [];

sequer[0]= {
  x : (Math.floor(Math.random() *
    columns)) * scale,
  y : (Math.floor(Math.random() *
    rows)) * scale
};
console.log(sequer);

let food = {
  x : (Math.floor(Math.random() *
    columns)) * scale, 
  y : (Math.floor(Math.random() *
    rows)) * scale
}


let playGame = setInterval(draw,100);


let d = "right";


document.onkeydown = direction;

function direction(event){
  let key = event.keyCode;
  if( key == 37 && d != "right"){
      d = "left";
  }else if(key == 38 && d != "down"){
      d = "up";
  }else if(key == 39 && d != "left"){
      d = "right";
  }else if(key == 40 && d != "up"){
      d = "down";
  }
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	for (let i=0; i<sequer.length; i++) {
		ctx.fillStyle = "#fff";
		ctx.strokeStyle = "red";
	  ctx.fillRect(sequer[i].x,
	    sequer[i].y, scale, scale);
      ctx.strokeRect(sequer[i].x,sequer[i].y,scale,scale);  
	}
	console.log(sequer);
	//  food 
	ctx.fillStyle = "#ff0";
	ctx.strokeStyle = "green";
	ctx.fillRect(food.x, food.y, scale, scale);
	ctx.strokeRect(food.x, food.y,scale,scale);
  

  let sequerX = sequer[0].x;
  let sequerY = sequer[0].y;
  console.log(sequerX);
  

  if( d == "left") sequerX -= scale;
  if( d == "up") sequerY -= scale;
  if( d == "right") sequerX += scale;
  if( d == "down") sequerY += scale;

  if (sequerX > canvas.width) {
    sequerX = 0;
  }
  if (sequerY > canvas.height) {
    sequerY = 0;
  }
  if (sequerX < 0) {
    sequerX = canvas.width;
  }
  if (sequerY < 0) {
    sequerY = canvas.height;
  }
  
  if(sequerX == food.x && sequerY == food.y){
      score++;
      food = {
          x : (Math.floor(Math.random() * columns)) * scale,
          y : (Math.floor(Math.random() * rows)) * scale
      }
      
  }else{
      
      sequer.pop();
  }
  console.log(sequer);
  
  let newHead = {
      x : sequerX,
      y : sequerY
  }
  console.log(sequer);
  if(eatSelf(newHead,sequer)){
  	clearInterval(playGame);
  }
  sequer.unshift(newHead);
}


function eatSelf(head,array){
  for(let i = 0; i < array.length; i++){
      if(head.x == array[i].x && head.y == array[i].y){
          return true;
      }
  }
  return false;
}

