gameState = 0;

var canvas;
var database;
var gameState, contestantCount, quiz, question, contestant;
var allContestants;
var form;

function setup(){
  canvas = createCanvas(600, 600);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  
  background("pink");

if(contestantCount === 4){
  quiz.update(1);
} 
if(gameState === 1){
  clear();
  quiz.play();
}

//yadlapallirajani@gmail.com
}
