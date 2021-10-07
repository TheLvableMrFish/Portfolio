// https://www.youtube.com/watch?v=Yvz_axxWG4Y
// canvas is atributed Franks Lab

//w3 site for the modal
// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var img = document.getElementById("proj1");
var img1 = document.getElementById("proj2");
var img2 = document.getElementById("proj3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];


// When the user clicks the button, open the modal 
img.onclick = function() {
  modal.style.display = "block";
}
img1.onclick = function() {
  modal1.style.display = "block";
}
img2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1 || event.target == modal2) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
}


const popup = document.querySelector('.full-screen');
let magic = false;


function togglePopup(){
    popup.classList.toggle('hidden');
    magic = !magic;

    // console.log(magic);
}

if(magic === true){
    togglePopup();
}

// this was to change the image of myself to the one of the gallery images
//I found the modal and changed it because it did what I wanted much better

// let person = true;
// let person1 = true;
// let person2 = true;
// function changeImage1()
// {
//     if(person){
// var img = document.getElementById("projShow");
// img.src="media/proj1.png";
// person = false;
// person1 = true;
// person2 = true;
//     }
//     else{
//         var img = document.getElementById("projShow");
//         img.src="media/yeeyee.jpg"; 
//         person = true;
//     }
// return false;
// }

// function changeImage2()
// {
//     if(person1){
// var img = document.getElementById("projShow");
// img.src="media/proj2.png";
// person = true;
// person1 = false;
// person2 = true;
//     }
//     else{
//         var img = document.getElementById("projShow");
//         img.src="media/yeeyee.jpg"; 
//         person1 = true;
//     }
// return false;
// }

// function changeImage3()
// {
//     if(person2){
// var img = document.getElementById("projShow");
// img.src="media/proj3.png";
// person = true;
// person1 = true;
// person2 = false;
//     }
//     else{
//         var img = document.getElementById("projShow");
//         img.src="media/yeeyee.jpg"; 
//         person2 = true;
//     }
// return false;
// }

// window.addEventListener('scroll', () => {
    

// })
    


// function toggleButtons(){
    
// }


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i = 0; i < 2; i++)
    particlesArray.push(new Particle());
    
});

canvas.addEventListener('touchmove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i = 0; i < 2; i++)
    particlesArray.push(new Particle());
    
});

canvas.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i = 0; i < 10; i++)
    particlesArray.push(new Particle());
})

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 16 + 1;
        this.speedX = Math.random() * 3 -1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
    }
}

// this is particles being drawn, then disapating
function handleParticles(){
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        for(let j = i; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 100){
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.2;//particlesArray[i].size/10;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue+= 5;
    
    requestAnimationFrame(animate);
}
// actually draws the particle and animates it
animate();




// second thing 


