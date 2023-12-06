// ESERCIZIO 1

let num1 = 4 ;
let num2 = 6 ;
let num3 = 2 ;
let num4 = 5 ;
let num5 = 1 ;
let somma = num1 + num2 + num3 + num4 + num5
let media = somma / 5
console.log (`La somma tra i numeri equivale a ${somma} e la media risulta  ${media}`) ; 

// ESERCIZIO 2

let year = 2023 ;
let birth = 2002 ;
let age = year - birth ;
let age2 = 100 - age ;
console.log(`Hai ${age} anni e ti mancano ${age2} per raggiungere i 100`) ; 

//  ESERCIZIO 3

let gatti = 44 ;
let gatti_perfila = 6 ;
let file_risultanti = Math.round(gatti / gatti_perfila) ;
let resto = (gatti % file_risultanti) ;
let gatti_mancanti = (gatti_perfila - resto) ;
console.log (`Ci sono ${file_risultanti} file di gatti e ne mancano ${gatti_mancanti} per una nuova fila, con un avanzo di ${resto}`) ;


// ESERCIZIO EXTRA

let T1 = 4 ;
let T2 = -5 ;
let T3 = 26 ;
let T4 = 18 ;
let T5 = 35 ;
let T6 = -9 ;
let T7 = 8 ;
let Tcaldo = Math.max(T1,T2,T3,T4,T5,T6,T7)
let Tfreddo = Math.min(T1,T2,T3,T4,T5,T6,T7)
let Tsomma = (T1+T2+T3+T4+T5+T6+T7)
let Tmedia = (Tsomma/7)

console.log(`La temperatura più calda è ${Tcaldo} quella più fredda è ${Tfreddo} mentre la temperatura media è ${Tmedia}`)
