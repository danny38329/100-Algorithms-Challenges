const increasingSequence = (...param1) => {
    let counter = 0;
    for (let i = 0; i < param1.length; i++) {
        if (param1[i] <= param1[i-1]) {
            counter ++;
            if (param1[i] <= param1[i-2] && param1[i+1] <= param1[i-1]) {
                return false;
            }
        }
    }
    return counter <= 1;
};

console.log(increasingSequence(2,3,3,2,4,5));