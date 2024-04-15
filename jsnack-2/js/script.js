const footballTeams = [
    { name: "Team A", points: 0, fouls: 0 },
    { name: "Team B", points: 0, fouls: 0 },
    { name: "Team C", points: 0, fouls: 0 },
    { name: "Team D", points: 0, fouls: 0 }
  ];


const newFootballTeams = [];
footballTeams.forEach((currElem, i)=>{
    currElem.points = rndNumber(50, 10);
    currElem.fouls = rndNumber(15, 0);
    
    const {name, fouls} = currElem;
    newFootballTeams.push({name, fouls});
})
  
  
console.log(footballTeams);


console.log(newFootballTeams);
  
  
  
  
  function rndNumber (min, max){
    return Math.floor(Math.random()* (max - min) + min);
  }

