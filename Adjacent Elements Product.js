const adjElem = (...param1) => {
    let largestNumber = param1[0] * param1[1];
    for (let i = 1; i < param1.length; i++) {
        let adjResult = param1[i] * param1[i+1];
        
        if (adjResult > largestNumber) {
            largestNumber = adjResult;
        };
        console.log(largestNumber);
    };
};

adjElem(2,3,7,9,6,7);