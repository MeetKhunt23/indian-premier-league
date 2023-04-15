var teamdetailss=JSON.parse(localStorage.getItem("Teamarray"));
var PlayerDetails=JSON.parse(localStorage.getItem("Playerarray"));



// var Newteam = document.getElementById("in6");
// for(let j=0;j<teamdetailss.length;j++){
//   Newteam.innerHTML=`
//   <option vlaue="${teamdetailss[j].teamName}">${teamdetailss[j].teamName}</option>`;
// }

$("#addplayerform").submit(function (e) {
    e.preventDefault();
    var TFop = "";
  if ($("#inp3").val() == "true") {
    TFop = true;
  } else {
    TFop = false;
  }
    let inpval = $("#in6").val();
    let ShortNam = "";
    for (var i = 0; i < inpval.length; i++) {
      if (i == 0) {
        ShortNam += inpval[i++].toUpperCase();
        continue;
      } else if (inpval[i] == " ") {
        ShortNam += inpval[++i].toUpperCase();
        i++;
      }
    }
    
    let AddPlayer = {
      id: PlayerDetails.length,
      playerName: $("#in1").val(),
      from: ShortNam,
      price: $("#in2").val() + "Cr",
      isPlaying: TFop,
      description: $("#in4").val(),
      playerImg: $("#in5").val(),
      playerTeam: $("#in6").val(),
    };
  
    PlayerDetails.push(AddPlayer);
    localStorage.setItem("Playerarray",JSON.stringify(PlayerDetails));
    location.href ="./index.html";
  });



