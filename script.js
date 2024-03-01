var timer = 60;
var score = 0;
var rn;// rn - random number




function makeBubble() {

  var cluster = ``;

  for (var a = 1; a <= 126; a++) {
    var rn = Math.floor(Math.random() * 10);
    cluster += `<div class="numbox">${rn}</div>`;
  }

  var jscript = document.querySelector("#midd");
  jscript.innerHTML = cluster;
  
}





function timeRunner() {
  var timestopper = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerunner").textContent = timer;
     
    } else {
        
      clearInterval(timestopper);
      gameOver();
      
    }
  }, 1000);
}







function getNewHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#getNewHit").textContent = rn;
  
}





function scoreIncrease() {
  score += 1;
  document.querySelector("#scoreIncrease").textContent = score;

}




function operation() {
  document.querySelector("#midd").addEventListener("click", function (data) {
    var datahit = Number(data.target.textContent);
    if (datahit === rn) {
      scoreIncrease();
      getNewHit();
      makeBubble();
     
    }
  });
}





function startScore() {
  document.querySelector("#scoreIncrease").textContent = score;
 
}




function gameOver(){
    var result = score;
   var a =  document.querySelector("#midd");
   a.innerHTML =`<h1>Game Over</h1><h1>: ${result}</h1>`;
}




function restart(){
    document.querySelector("#midd").innerHTML =`<button>RESTART THE GAME</button>`

}






function allGame() {
  
  makeBubble();
  startScore();
  timeRunner();
  operation();
  getNewHit();
}




allGame();
