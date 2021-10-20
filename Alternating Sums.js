const alternatingSums = (...weightPeople) => {
    let countTotal = 0;
    let weightTeam1 = 0;
        let weightTeam2 = 0;
    
    for (let i = 0; i < weightPeople; i++){
        
        if (i % 2 === 0){
          weightTeam1 += weightPeople[i];
        } else {
          weightTeam2 += weightPeople[i];
        }
        return weightTeam1, weightTeam2;
    }
   
}

console.log(alternatingSums(2,3,5,6,9));