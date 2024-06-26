"use strict"

const persone = [
    {
        nome: "Ryam",
        cognome: "Peguero",
        eta: 22
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 14
    },
    {
        nome: "Francesca",
        cognome: "Rossa",
        eta: 35
    },
    {
        nome: "Pippo",
        cognome: "Marino",
        eta: 5
    }

]

// const newArray = [];

// persone.forEach((currElem, i)=>{
//     const {nome, cognome, eta} = currElem;
//     newArray[i] = `${nome} ${cognome} può guidare? ${puoGuidare(eta)}`
// });

// console.log(newArray);

// function puoGuidare(age){
//     if(age < 18 ){
//         return "No è minorenne";
//     }else if(age >= 18){
//         return "Si è maggiorenno";
//     }
// }

//OR

const newArray = persone.map((currElem)=>{
    const {nome, cognome, eta} = currElem;
    if(eta < 18)
        return `${nome} ${cognome} può guidare? No è minorenne`
    else
        return `${nome} ${cognome} può guidare? Si è maggiorenne`
})

console.log(newArray);