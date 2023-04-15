let urll= location.href;
let newUrll = new URL(urll);
let teamnam = newUrll.searchParams.get("name");

TeamDetails= JSON.parse(localStorage.getItem("Teamarray"));
PlayerDetails = JSON.parse(localStorage.getItem("Playerarray"));
var playerbox= document.getElementById("Playercontainer");
var Teambox = document.getElementById("teamcontainer");

var counter = 0;

for(var i=0;i<PlayerDetails.length;i++){
if(teamnam==PlayerDetails[i].from){
    var isPlay="";
    if(PlayerDetails[i].isPlaying == true){
        isPlay="Playing";
    }else{
        isPlay="Bench";
    }
    counter++;

    playerbox.innerHTML += `   
    <div onclick="Playerclick('${PlayerDetails[i].playerName}')" class="box">
    <img src="${PlayerDetails[i].playerImg}" class="pimage" alt="playerimage">
    <div class="playerdeta">
    <p class="p1">${PlayerDetails[i].playerName}</p>
    <p class="p2"> Price:${PlayerDetails[i].price}</p>
    <p class="p2"> Playing : ${isPlay}</p>
    <p class="p2">${PlayerDetails[i].description}</p>
    </div>
    </div>
    `;
}
function Playerclick(player) {
    window.open(`./player.html?name=${player}`, "_self");
  }
}


console.log(counter);
TeamDetails.map((item) => {
  if (teamnam == item.sName) {
    return (Teambox.innerHTML += `
<div class="teamcon">
<img src="${item.teamIcon}" class="teamlogoo" alt="icon">
<div class="teamcondet">
<h1 class="tname">${item.teamName}</h1>
<h2 class="capnam">Team Captain : <span>${item.teamCaptain}</span></h2>
<p class="man">Star Batsman : <span>${item.topBatsman}</span></p>
<p class="man">Star Bowler : <span>${item.topBowler}</span> </p>
<p class="man">Number of Players :  <span>${counter}</span> </p>
<h3 class="twon">Trophies Won : <span>${item.championshipWonCount}</span></h3>
</div>
</div>
`);
  }
});