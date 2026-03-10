import { useEffect, useRef } from "react";
import BackButton from "./BackButton";

import her from "../images/her.jpeg";
import you from "../images/me.jpeg";
import heartImg from "../images/heart.png";

function MarioGame() {

const canvasRef = useRef(null);

useEffect(()=>{

const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");

const playerImg = new Image();
const goalImg = new Image();
const heartImage = new Image();

playerImg.src = her;
goalImg.src = you;
heartImage.src = heartImg;

const player = {
x:50,
y:300,
width:50,
height:50,
dy:0,
jump:false
};

const goal = {
x:720,
y:280,
width:60,
height:60
};

let heartsCollected = 0;

const gravity = 0.7;
const speed = 3.5;

const keys = {
left:false,
right:false
};

const platforms = [
{x:0,y:350,width:800,height:50},
{x:150,y:280,width:120,height:20},
{x:350,y:230,width:120,height:20},
{x:550,y:260,width:120,height:20}
];

const hearts = [
{x:180,y:240, collected:false},
{x:380,y:190, collected:false},
{x:580,y:220, collected:false}
];

function drawPlatforms(){
ctx.fillStyle = "#22c55e";
platforms.forEach(p=>{
ctx.fillRect(p.x,p.y,p.width,p.height);
});
}

function drawHearts(){

hearts.forEach(h=>{

if(!h.collected){

ctx.drawImage(heartImage,h.x,h.y,25,25);

if(
player.x < h.x+25 &&
player.x+player.width > h.x &&
player.y < h.y+25 &&
player.y+player.height > h.y
){
h.collected = true;
heartsCollected++;
}

}

});

}

function drawConfetti(){

for(let i=0;i<40;i++){

ctx.fillStyle = `hsl(${Math.random()*360},80%,60%)`;

ctx.fillRect(
Math.random()*800,
Math.random()*400,
4,
4
);

}

}

function update(){

ctx.clearRect(0,0,800,400);

/* SMOOTH MOVEMENT */
if(keys.right) player.x += speed;
if(keys.left) player.x -= speed;

/* MAP BOUNDARIES */
if(player.x < 0) player.x = 0;
if(player.x > 750) player.x = 750;

drawPlatforms();
drawHearts();

/* GRAVITY */
player.dy += gravity;
player.y += player.dy;

/* PLATFORM COLLISION */
platforms.forEach(p=>{

if(
player.x < p.x+p.width &&
player.x+player.width > p.x &&
player.y+player.height < p.y+10 &&
player.y+player.height+player.dy >= p.y
){
player.dy = 0;
player.jump = false;
player.y = p.y-player.height;
}

});

ctx.drawImage(playerImg,player.x,player.y,player.width,player.height);
ctx.drawImage(goalImg,goal.x,goal.y,goal.width,goal.height);

ctx.fillStyle="white";
ctx.font="18px Arial";
ctx.fillText("Hearts: "+heartsCollected,20,30);

/* WIN CONDITION */

if(
player.x < goal.x+goal.width &&
player.x+player.width > goal.x &&
player.y < goal.y+goal.height &&
player.y+player.height > goal.y
){

ctx.font="30px Arial";
ctx.fillText("You found Riddhesh ❤️",250,160);

drawConfetti();

}

requestAnimationFrame(update);

}

update();

/* KEYBOARD INPUT */

function keyDown(e){

if(e.key==="ArrowRight") keys.right=true;
if(e.key==="ArrowLeft") keys.left=true;

if(e.key===" " && !player.jump){
player.dy = -13;
player.jump = true;
}

}

function keyUp(e){

if(e.key==="ArrowRight") keys.right=false;
if(e.key==="ArrowLeft") keys.left=false;

}

window.addEventListener("keydown",keyDown);
window.addEventListener("keyup",keyUp);

return ()=>{
window.removeEventListener("keydown",keyDown);
window.removeEventListener("keyup",keyUp);
};

},[]);

return(

<div className="portal">

<BackButton/>

<h1>🎮 Find Riddhesh</h1>

<p>
Use ← → to move and SPACE to jump  
Collect hearts and reach Riddhesh ❤️
</p>

<canvas
ref={canvasRef}
width="800"
height="400"
style={{
background:"#020024",
marginTop:"30px",
borderRadius:"12px"
}}
/>

</div>

);

}

export default MarioGame;