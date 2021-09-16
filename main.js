//main.js for learing JS in Day 2
var x = 2;
var userName = "steven";
var htmlBuilder = "";

teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];


console.log(teams);
console.log(wins);
console.log(wins[x]);


function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');

    for(var i = 0; i < teams.length + 1; i++){
        var tr = tbl.insertRow();x
        for(var j = 0; j < 3; j++){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                }
            }
tbl.rows[0].cells[0].innerHTML = "Teams";
tbl.rows[0].cells[1].innerHTML = "Wins";
tbl.rows[0].cells[2].innerHTML = "Losses";

    for(var i = 1; i < (teams.length + 1); i++) {
      tbl.rows[i].cells[0].innerHTML = teams[(i-1)];
      tbl.rows[i].cells[1].innerHTML = wins[(i-1)];
      tbl.rows[i].cells[2].innerHTML = losses[(i-1)];
    }

//logic to determin the team with the most wins.
  var tempHighWins = 0;
  var tempLeader = 0;

  for (var i=0; i<teams.length; i++){
    if(wins[i] >= tempHighWins){
      tempHighWins = wins[i];
      tempLeader = i;
    }
  }
tbl.rows[(tempLeader+1)].cells[0].innerHTML = "<strong>" + tbl.rows[(tempLeader+1)].cells[0].innerHTML + "</strong>";
    body.appendChild(tbl);
}
tableCreate();
