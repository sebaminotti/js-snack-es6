








var genera = document.getElementById("genera")

genera.addEventListener("click",
function () {
    var serieA = [
{nome: " inter", punti: 0, falliSubiti:0, falliEffettuati:0},


{nome: " juventus", punti: 0, falliSubiti:0, falliEffettuati:0},


{nome: " atalanta", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " benevento", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " napoli", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " fiorentina", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " sampdoria", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " udinese", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " crotone", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " milan", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " sassuolo", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " verona", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " roma", punti: 0, falliSubiti:0, falliEffettuati:0},
{nome: " genoa", punti: 0, falliSubiti:0, falliEffettuati:0},
{ nome: " spezia", punti: 0, falliSubiti:0, falliEffettuati:0},
{ nome: " torino", punti: 0, falliSubiti:0, falliEffettuati:0},
{ nome: " cagliari", punti: 0, falliSubiti:0, falliEffettuati:0},
{ nome: " bologna", punti: 0, falliSubiti:0, falliEffettuati:0},
{ nome: " lazio", punti: 0, falliSubiti:0, falliEffettuati:0},
{ nome: " parma", punti: 0, falliSubiti:0, falliEffettuati:0},
];

function randomnumber(min , max) {

    return Math.floor(Math.random()*(max - min +1) + min)
}

for (let i = 0; i < serieA.length; i++) {
    
  var   squadra = serieA[i];
   
  squadra.punti = randomnumber ( 1,100);
  squadra.falliSubiti = randomnumber (20,200);
  squadra.falliEffettuati = randomnumber ( 20,200);


    
document.getElementById("squad").style.listStyle="none"
document.getElementById("squad").innerHTML+="<li class ='blue'>"+ " nome squadra "+serieA[i].nome;
document.getElementById("squad").innerHTML+="<li class ='orange'>"+ " punti conquistati "+serieA[i].punti;
document.getElementById("squad").innerHTML+="<li class ='red'>"+ "falli fatti "+serieA[i].falliEffettuati;
document.getElementById("squad").innerHTML+="<li class ='green'>"+ "falli subiti "+serieA[i].falliSubiti;



};

 
console.log(serieA);































}































);




