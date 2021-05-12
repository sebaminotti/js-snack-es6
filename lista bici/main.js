
var bici = [
 
{

    'nome': "Felt",
    'peso': 7.7,
    'prezzo' :4999,
    'tipologia': 'bici da corsa'
   },

   {
    'nome': "bianchi",
    'peso': 7.6,
    'prezzo' :10289,
    'tipologia': 'bici da corsa'
   },

   {
    'nome': "basso",
    'peso': 8.2,
    'prezzo' :4799,
    'tipologia': 'bici da corsa'
   },


   {
    'nome': "wilier",
    'peso': 7.4,
    'prezzo' :8199,
    'tipologia': 'bici da corsa'
   },

   {
    'nome': "bianchi",
    'peso': 7.7,
    'prezzo' :1399,
    'tipologia': 'bici da corsa'
   },
   {
    'nome': "orbea",
    'peso': 8.3,
    'prezzo' :5699,
    'tipologia': 'bici da corsa'
   },


];



console.log(bici)

var biciLeggera 

var biciLeggera = bici[0];

for(let  i = 0; i < bici.length; i++ ) {

    if(bici[i].peso < biciLeggera.peso) {

        biciLeggera = bici[i];
    }

}
console.log(bici[4]);

console.log(`ED ECCO LA BICI PIU' LEGGERA DEL NEGOZIO: 
NOME:     ${biciLeggera.nome}

PESO: ${biciLeggera.peso} kg

PREZZO: ${biciLeggera.prezzo} €

TIPOLOGIA D'UTILIZZO: ${biciLeggera.tipologia}

`
 );

 document.getElementById("bici").innerHTML = JSON.stringify(bici);
 document.getElementById("migliore").innerHTML=JSON.stringify(biciLeggera);



