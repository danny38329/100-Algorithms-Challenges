const adjacentSubtraction = (...param) => {
    let counter = 0;
    let largestNumber = Math.abs(param[0] - param[1]);
    for (let i = 1; i < param.length; i++) {
        
        if (largestNumber < Math.abs(param[i]-param[i+1])) {
            largestNumber = Math.abs(param[i]-param[i+1]);
        };
        
    }
    return largestNumber;
}

console.log(adjacentSubtraction(2,3,5,7,8, 23, 15, 50, 100));