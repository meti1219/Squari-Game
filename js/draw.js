const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

let imageName = new imageName();
imageName.src = "image/green_apples.jpg";
 let audioName = new Audio();
 audioName.src = "path/audio.jpg"; audioName.play();

 ctx.drawimage(imageName, X,Y,Width,Height);
 ctx.drawimage(imageName,40,50,25,25);
  
 ctx.fillStyle = "green";
 ctx.fillRect ( 100, 300, 30, 30);

 let box = 32;
 ctx.fillStyle ="black";
 ctx.fillRect(5*box,6*box,2*box,3*box);

 let snake = [];
 snake[0] = { x : 9*box, y:10*box};
 snake[1] = { x : 8*box, y:10*box};
 letfood={
     x :Math.floor(Math.random()*17 +1)*box,
     y :Math.floor(Math.random()*15 +3)*box
 };

 function draw(){
     ctx.drawimage(ground,0,0);
     for(let i =0; i < snake.length;i++){
         ctx.fillStyle = (i ==0) ?"green":"white";
         ctx.fillRect(snake[i].x,snake[i].y,box,box);
         ctx.strokeStyle = "red";
         ctx.strokeRect(snake[i].x,snake[i].y,box,box);
     }
     ctx.drawimage(foodimg,food.x,food.y);

 }
 /* to be conetinie***********/