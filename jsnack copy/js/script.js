"use strict"

const numbersArray = [12,57,67,53,56,1,24]

const newNumbersArray = [...copyFromIndexValues(numbersArray, 2, 5)];

console.log(newNumbersArray);

function copyFromIndexValues(array, a, b){
    if(a < b && Array.isArray(array) && b < array.length){
        ///
        const newArray = array.filter((currElem, i)=>{
            return i >= a && i < b;
        })

        return newArray;
    }else{
        return array = [""];
    }
}