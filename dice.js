function rollMe() {
  var random1 = Math.floor((Math.random() * 6) + 1);
  var random2 = Math.floor((Math.random() * 6) + 1);

  if(random1 > random2){
    document.getElementById("title").innerHTML = "Player 1 wins";
  }
  if(random1 < random2){
    document.getElementById("title").innerHTML = "Player 2 wins";
  }
  if(random1 === random2){
      document.getElementById("title").innerHTML = "It's a draw";
    }

  document.getElementById("p1img").innerHTML = "<img src='images/dice"+random1+".png' alt='dice"+random1+"'>";
  document.getElementById("p2img").innerHTML = "<img src='images/dice"+random2+".png' alt='dice"+random2+"'>";

  /*if (random1 === 1) {
    document.getElementById("p1img").innerHTML = "<img src='images/dice1.png' alt='dice1'>";
  }
  if (random1 === 2) {
    document.getElementById("p1img").innerHTML = "<img src='images/dice2.png' alt='dice2'>";
  }
  if (random1 === 3) {
    document.getElementById("p1img").innerHTML = "<img src='images/dice3.png' alt='dice3'>";
  }
  if (random1 === 4) {
    document.getElementById("p1img").innerHTML = "<img src='images/dice4.png' alt='dice4'>";
  }
  if (random1 === 5) {
    document.getElementById("p1img").innerHTML = "<img src='images/dice5.png' alt='dice5'>";
  }
  if (random1 === 6) {
    document.getElementById("p1img").innerHTML = "<img src='images/dice6.png' alt='dice6'>";
  }
  if (random2 === 1) {
    document.getElementById("p2img").innerHTML = "<img src='images/dice1.png' alt='dice1'>";
  }
  if (random2 === 2) {
    document.getElementById("p2img").innerHTML = "<img src='images/dice2.png' alt='dice2'>";
  }
  if (random2 === 3) {
    document.getElementById("p2img").innerHTML = "<img src='images/dice3.png' alt='dice3'>";
  }
  if (random2 === 4) {
    document.getElementById("p2img").innerHTML = "<img src='images/dice4.png' alt='dice4'>";
  }
  if (random2 === 5) {
    document.getElementById("p2img").innerHTML = "<img src='images/dice5.png' alt='dice5'>";
  }
  if (random2 === 6) {
    document.getElementById("p2img").innerHTML = "<img src='images/dice6.png' alt='dice6'>";
  }*/
}
