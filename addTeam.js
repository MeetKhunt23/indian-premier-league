let Teamdata = JSON.parse(localStorage.getItem("Teamarray"));

$("#addform").submit(function (e) {
    e.preventDefault();
    let inpval = $("#in1").val();
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
    
    let Teamdadd = {
      id: Teamdata.length,
      teamName: $("#in1").val(),
      teamCaptain: $("#in2").val(),
      sName: ShortNam,
  
      teamIcon: $("#in3").val(),
      championshipWonCount: $("#in4").val(),
      topBatsman: $("#in5").val(),
      topBowler: $("#in6").val(),
    };
  
    Teamdata.push(Teamdadd);
    localStorage.setItem("Teamarray",JSON.stringify(Teamdata));
    location.href = `./Team.html?name=${Teamdadd.sName}`;
  });



