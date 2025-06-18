let userScore= 0;
let compScore= 0;

const themeToggle = document.getElementById('theme-toggle');

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const computerScorePara = document.querySelector("#comp_score");
const winSound =new Audio("hurey_win_audio.aac");
const loseSound =new Audio("fail_audio.mpeg");
const drawSound =new Audio("game_draw_audio.mpeg");

//sound effect


const genComputerChoice = () => {
    const options =["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};
const drawGame = () => {

    msg.innerText = "You are game was Draw! Pls try again >_<";
    drawSound.play();
     msg.style.backgroundColor = "#f5c518";
     

};

const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara. innerText = userScore;
        msg.innerText = `You win !  Your ${userChoice} beats ${computerChoice}`;
        winSound.play();
        msg.style.backgroundColor = "green";
    } else {
        compScore ++;
        computerScorePara.innerText = compScore;

             msg.innerText = `You lose ${computerChoice} beats your ${userChoice} `;
             loseSound.play();
              msg.style.backgroundColor = "red";
              }
    };



const playGame = (userChoice) => {
 

    //genetating computer choice -> modularway
     const computerChoice = genComputerChoice();
    //  console.log("you",userChoice,"|computer:",computerChoice);

       if(userChoice===computerChoice) {
        //draw

        drawGame();
        return;

       } 
        let userWin = true;
    if(userChoice ==="rock") {
        //sci,paper
       userWin= computerChoice ==="paper"? false :true;
    }   else if (userChoice==="paper") {
        //rock,sci
       userWin= computerChoice==="scissors"? false:true;
    } else if(userChoice==="scissors") {
        //rock,paper
        userWin = computerChoice==="rock"? false:true;

    }
    showWinner(userWin,userChoice,computerChoice);
     

};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
   
    });
});



// Toggle theme on click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change icon
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️'; // Light mode icon
  } else {
    themeToggle.textContent = '🌙'; // Dark mode icon
  }
});

