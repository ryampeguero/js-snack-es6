const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];

const benzina = [];
const diesel = [];
const resto = [];
automobili.forEach((currElem, i)=>{
    switch(currElem.alimentazione){
        case "benzina":
            benzina.push(currElem);
            break;
        case "diesel":
            diesel.push(currElem);
            break;
        default:
            resto.push(currElem);
    }
})

// OR

// const benzina = automobili.filter((currElem, i)=>{
//    if(currElem.alimentazione == "benzina")
//     return true;
// });
// const diesel =  automobili.filter((currElem, i)=>{
//     if(currElem.alimentazione == "benzina")
//      return true;
//  });

// const resto =  automobili.filter((currElem, i)=>{
//     if(currElem.alimentazione != "benzina" && currElem.alimentazione != "diesel")
//      return true;
//  });


console.log("benzina", benzina, "diesel", diesel, resto);