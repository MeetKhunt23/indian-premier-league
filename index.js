$(".crowsel").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

var teams = [
  {
    id: 0,
    teamName: "Chennai Super Kings",
    sName: "CSK",
    fullSname: "CSK (Chennai Super Kings)",
    teamIcon: "https://www.chennaisuperkings.com/assets/images/lazy-logo.jpg",
    teamCaptain: "MS Dhoni",
    topBatsman: "Ruturaj Gaikwad",
    topBowler: "Deepak Chahar",
    championshipWonCount: "4 Times Champion",
  },
  {
    id: 1,
    teamName: "Mumbai Indians",
    sName: "MI",
    fullSname: "MI (Mumbai Indians)",
    teamIcon:
      "https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png",
    teamCaptain: "Rohit Sharma",
    topBatsman: "Suryakumar Yadav",
    topBowler: "Jasprit Bumrah",
    championshipWonCount: "5 Times Champion",
  },
  {
    id: 2,
    teamName: "Royal Challengers Bangalore",
    sName: "RCB",
    fullSname: "RCB (Royal Challengers Bangalore)",
    teamIcon:
      "https://pbs.twimg.com/media/EQtmN0fUcAAnCyu?format=jpg&name=small",
    teamCaptain: "Faf Du Plessis",
    topBatsman: "Virat kohli",
    topBowler: "Josh Hazlewood",
    championshipWonCount: "0 Times Champion",
  },
  {
    id: 3,
    teamName: "Kolkata Knight Riders",
    sName: "KKR",
    fullSname: "KKR (Kolkata Knight Riders)",
    teamIcon:
      "https://i.pinimg.com/originals/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg",
    teamCaptain: "Shreyas Iyer",
    topBatsman: "Nitish Rana",
    topBowler: "Shivam Mavi",
    championshipWonCount: "2 Times Champion",
  },
  {
    id: 4,
    teamName: "Delhi Captials",
    sName: "DC",
    fullSname: "DC (Delhi Captials)",
    teamIcon:
      "https://i0.wp.com/logotaglines.com/wp-content/uploads/2019/02/Delhi-Capitals-Logo-Tagline.jpg?fit=500%2C500&ssl=1",
    teamCaptain: "Rishabh Pant",
    topBatsman: "David Warner",
    topBowler: "Shardul Thakur",
    championshipWonCount: "0 Time Champion",
  },
  {
    id: 5,
    teamName: "Kings XI Punjab",
    sName: "PK",
    fullSname: "PK (Punjab Kings)",
    teamIcon:
      "https://i.pinimg.com/originals/27/91/c1/2791c17b24864c96637dc84288c4d634.png",
    teamCaptain: "Shikhar Dhawan",
    topBatsman: "Mayank Agarwal",
    topBowler: "Arshdeep Singh",
    championshipWonCount: "0 Time Champion",
  },
  {
    id: 6,
    teamName: "Rajasthan Royals",
    sName: "RR",
    fullSname: "RR (Rajasthan Royals)",
    teamIcon:
      "https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/08/Rajasthan-Royals-RR-Logo-Tagline-Slogan-Owner-Motto.jpg?fit=640%2C640&ssl=1",
    teamCaptain: "Sanju Samson",
    topBatsman: "Jos Buttler",
    topBowler: "Trent Boult",
    championshipWonCount: "1 Time Champion",
  },
  {
    id: 7,
    teamName: "Sunrisers Hyderabad",
    sName: "SH",
    fullSname: "SH (Sunrisers Hyderabad)",
    teamIcon:
      "https://i.pinimg.com/736x/b7/7d/f5/b77df59b1a5f0f209b94a0148ddb02d5.jpg",
    teamCaptain: "Kane Williamson",
    topBatsman: "Aiden Markram",
    topBowler: "Bhuvneshwar Kumar",
    championshipWonCount: "1 Time Champion",
  },
];

var players = [
  {
    id: 0,
    playerName: "Hardik Pandya",
    from: "GT",
    price: "12.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 1,
    playerName: "Mohammad Shami",
    from: "GT",
    price: "10.00 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 2,
    playerName: "Shubham Gill",
    from: "GT",
    price: "10.00 Cr",
    isPlaying: false,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 3,
    playerName: "Jayant Yadav",
    from: "GT",
    price: "2.00 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 4,
    playerName: "Rashid Khan",
    from: "GT",
    price: "1.30 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 5,
    playerName: "Virat Kohli",
    from: "RCB",
    price: "13.00 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 6,
    playerName: "Glenn Maxwell",
    from: "RCB",
    price: "10.25 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 7,
    playerName: "Shahbaz Ahmed",
    from: "RCB",
    price: "1.00cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 8,
    playerName: "Mohhamad Siraj",
    from: "RCB",
    price: "5.00cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 9,
    playerName: "Dinesh Kartik",
    from: "RCB",
    price: "3.00cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 10,
    playerName: "Rohit Sharma",
    from: "MI",
    price: "14.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 11,
    playerName: "Ishan Kishan",
    from: "MI",
    price: "17.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 12,
    playerName: "Jasprit Bumrah",
    from: "MI",
    price: "7.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 13,
    playerName: "Mayank Markande",
    from: "MI",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4951.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 14,
    playerName: "Rahul Budhhi",
    from: "MI",
    price: "5.00 Cr",
    isPlaying: true,
    description: "bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 15,
    playerName: "MS Dhoni",
    from: "CSK",
    price: "14.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 16,
    playerName: "Dwayne Bravo",
    from: "CSK",
    price: "07.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 17,
    playerName: "Robin Uthappa",
    from: "CSK",
    price: "02.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 18,
    playerName: "Ambati Raydu",
    from: "CSK",
    price: "01.00 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 19,
    playerName: "Shivam Dube",
    from: "CSK",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
    playerTeam: "Chennai Super Kings",
  },

  {
    id: 20,
    playerName: "Rishabh Pant",
    from: "DC",
    price: "13.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
    playerTeam: "Delhi Capitals",
  },
  {
    id: 21,
    playerName: "Mandeep Singh",
    from: "DC",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
    playerTeam: "Delhi Capitals",
  },
  {
    id: 22,
    playerName: "Lalit Yadav",
    from: "DC",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
    playerTeam: "Delhi Capitals",
  },
  {
    id: 23,
    playerName: "Prithvi shaw",
    from: "DC",
    price: "18.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
    playerTeam: "Delhi Capitals",
  },

  {
    id: 24,
    playerName: "Jos Buttler",
    from: "RR",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 25,
    playerName: "Karun Nair",
    from: "RR",
    price: "01.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 26,
    playerName: "Dhruv Jurel",
    from: "RR",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20620.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 27,
    playerName: "Riyan Parag",
    from: "RR",
    price: "03.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 28,
    playerName: "Devdutt Paddikal",
    from: "RR",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 29,
    playerName: "Shreyas Iyer",
    from: "KKR",
    price: "10.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 30,
    playerName: "Abhijeet Tomar",
    from: "KKR",
    price: "18.50 Cr",
    isPlaying: false,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 31,
    playerName: "Pat Cummins",
    from: "KKR",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 32,
    playerName: "Ashok Sharma",
    from: "KKR",
    price: "18 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 33,
    playerName: "Rinku Singh",
    from: "KKR",
    price: "10.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 34,
    playerName: "Rahul Tripathi",
    from: "SH",
    price: "10.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 35,
    playerName: "Anukul Sharma",
    from: "SH",
    price: "10.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 36,
    playerName: "Abdul Samad",
    from: "SH",
    price: "5.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 37,
    playerName: "Nicolas Pooran",
    from: "SH",
    price: "3.50 Cr",
    isPlaying: false,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 38,
    playerName: "Shikhar Dhawan",
    from: "PK",
    price: "5.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg:
      "https://www.punjabkingsipl.in/static-assets/images/players/3722.png?v=3.74",
    playerTeam: "Punjab Kings",
  },
  {
    id: 39,
    playerName: "Arshdeep Singh",
    from: "PK",
    price: "7.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg:
      "https://www.pngguru.in/storage/uploads/images/Arshdeep%20singh%20indian%20cricket%20player%20free%20transparent%20png_1669463182_774603107.webp",
    playerTeam: "Punjab Kings",
  },
  {
    id: 40,
    playerName: "Mayank Agarwal",
    from: "PK",
    price: "8.0 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg:
      "https://www.techniajz.com/techniajz/assets/admin/ckeditor/ckfinder/userfiles/images/myanki.png",
    playerTeam: "Punjab Kings",
  },
  {
    id: 41,
    playerName: "Jonny Bairstow ",
    from: "PK",
    price: "9.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg:
      "https://www.punjabkingsipl.in/static-assets/images/players/19394.png?v=3.74",
    playerTeam: "Punjab Kings",
  },
  {
    id: 42,
    playerName: "Liam Livingstone",
    from: "PK",
    price: "11.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg:
      "https://files.prokerala.com/news/photos/imgs/1024/mumbai-pbks-s-liam-livingstone-celebrates-after-a-1370025.jpg",
    playerTeam: "Punjab Kings",
  },
];

var addPlayerfun = () => {
  window.open("./addPlayer.html", "_self");
};

var addTeamfun = () => {
  window.open("./addTeam.html", "_self");
};

let TeamDetails = [];
let PlayerDetails = [];

if (localStorage.getItem("Teamarray") === null)
  localStorage.setItem("Teamarray", JSON.stringify(teams));

if (localStorage.getItem("Playerarray") === null)
  localStorage.setItem("Playerarray", JSON.stringify(players));

TeamDetails = JSON.parse(localStorage.getItem("Teamarray"));
PlayerDetails = JSON.parse(localStorage.getItem("Playerarray"));

var suggestArray = [];
for (var i = 0; i < TeamDetails.length; i++) {
  suggestArray.push(TeamDetails[i].sName);
}

let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");

inputBox.onkeyup = (e) => {
  if (e.keyCode == 13) {
    icon.click();
  }
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestArray.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });

    searchBar.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "currentLi(this)");
    }
  } 
  
  else {
    searchBar.classList.remove("active");
  }
};   
function currentLi(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    window.open(`../team.html?name=${element.textContent}`, "_self");
  };
  searchBar.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

var teamsGroup = document.getElementById("teams-section");
for (var i = 0; i < TeamDetails.length; i++) {
  teamsGroup.innerHTML += `
    <div class="teambox" onclick="teamcardclick('${i}')">
    <img src="${TeamDetails[i].teamIcon}" class="imgt"> 
    <div class="teamli">
    <span class="i1">${TeamDetails[i].teamName} </span>
    <span class="i2">${TeamDetails[i].championshipWonCount}</span>
    <span class="i3">Captain:${TeamDetails[i].teamCaptain}</span>
    </div>
    </div>
    `;
}

function teamcardclick(x) {
  var ClCard = TeamDetails[x].sName;

  window.open(`../team.html?name=${ClCard}`, "_self");
}
