const longestString = (...param1) => {
    for (let i = 0; i < param1.length; i++) {
        if (param1[i] >= param1[i + 1]) {
            param2 = param1[i];
        } else {
            param2 = param1[i+1];
        };
        return param2;
    }

}

console.log(longestString("danny", "kobe", "two"));