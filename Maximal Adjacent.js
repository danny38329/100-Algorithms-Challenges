const maximalAdjacent = (...param) => {
    let largestNumber = param[0] + param[1];
    for (let i = 1; i < param.length; i++) {
        if (largestNumber < param[i] + param[i+1]) {
            largestNumber = param[i] + param[i+1];
        };
    } return largestNumber;
};

console.log(maximalAdjacent(2,4,5,6,5,7,3,2,1));