
let numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let numeriSelezionati=[];

let comparazione = (array, a, b)=> {

numeri.forEach((element, i)=>{


if ((i>=a)&&(i <= b)){

numeriSelezionati.push(element);
}
});
return numeriSelezionati;
};


comparazione(numeri, 3,6)



console.log(`lista con tutti i numeri ${numeri} 

lista di numeri selezionati ${numeriSelezionati} 
` );

`
Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

`
