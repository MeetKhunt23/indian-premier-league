let urll = location.href;
let newUrll = new URL(urll);
let teamnam = newUrll.searchParams.get("name");
console.log(teamnam);

TeamDetails = JSON.parse(localStorage.getItem("Teamarray"));
PlayerDetails = JSON.parse(localStorage.getItem("Playerarray"));
var Playerdetailess = document.getElementById("playerdetailes");

for (var i = 0; i < PlayerDetails.length; i++) {
  if ( PlayerDetails[i].playerName == teamnam ) {
    var isPlay = "";
    if (PlayerDetails[i].isPlaying == true) {
      isPlay = "Playing";
    } else {
      isPlay = "On Bench";
    }
    Playerdetailess.innerHTML += `
        <div id="playimg">
        <img src="${PlayerDetails[i].playerImg}" class="player-img" alt="player-img">
        </div>
        <div class="pdet">
        <div class="raw1">
        <span>Player Name</span>
        <span>Team Name</span>
        <span>Team Code</span>
        <span>Price</span>
        <span>Playing Status</span>
        </div>
        <div class="raw2">
        <span>${PlayerDetails[i].playerName} </span>
        <span>${PlayerDetails[i].playerTeam}</span>
        <span>${PlayerDetails[i].from}</span>
        <span>${PlayerDetails[i].price}</span>
        <span>${isPlay}</span>
        </div>
        </div>
        `;
  }
}
