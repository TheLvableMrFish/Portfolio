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




// connect 4

document.addEventListener('DOMContentLoaded', () =>{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i = 0, len = squares.length; i < len; i++)

    (function(index){
    //add an onclick to each square in your grid
        squares[i].onclick = function(){
        //if the square below your current square is taken, you can go ontop of it
            if(squares[index + 7].classList.contains('taken')){
                if(currentPlayer === 1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    //change the player
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer === 2){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    //change the player
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                //if the square below you current square is not taken, you can't go here
            } else alert('cant go here')
    }
    })(i)

//check the board for a win or lose
function checkBoard(){
    //make const that shows all winning arrays
    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]
    //now take the 4 values in each winningArrays and plug them into the squares
    for(let y = 0; y < winningArrays.length; y++){
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]
        
    //now check those array to see if they all have the class of player-one
    if(
        square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')){
            result.innerHTML = 'Player One Wins!'
            
        }
    // now check to see if they all have the class name player-two
    else if(
        square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')){
            result.innerHTML = 'Player Two Wins!'
            
        }
    }
}

// add an eventListener to each square that will trigger the checkBoard function on click
squares.forEach(square => square.addEventListener('click', checkBoard))


})


