"use strict"
const bikes = [
    {   
        name: "Mountain Bike", 
        weight: 6,
    },
    {   
        name: "Road Bike", 
        weight: 2,
    },
    {   
        name: "Hybrid Bike", 
        weight: 1,
    },
    {   
        name: "BMX Bike", 
        weight: 4,
    }
    
];

let minorWeight = bikes.map((currElem)=>{
    return currElem.weight
});

console.log(minorWeight);

// const lowerValue = Math.min(...minorWeight);
const lowerValue = minore(minorWeight);

let result = "";
bikes.forEach((currElem, i)=>{
    const {name, weight} = bikes [i];
    if(weight === lowerValue){
        result += `
        <div>
            <span><h4>Nome: </h4>${name}</span>
            <span><h4>Peso: </h4>${weight}</span>
                
        </div>
        
        ` 
    }
})
document.querySelector("body").innerHTML += result;




function minore(myArray){
    let valore=null;
    myArray.forEach((currElem, i)=>{
        if(valore != null){
            if(valore > currElem){
                valore = currElem;
            }

        }else{
            valore = currElem;
        }
    })
    return valore;
}


console.log("ciao", minore(minorWeight));