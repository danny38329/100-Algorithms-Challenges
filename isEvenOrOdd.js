const evenOrOdd = param => {
    if (isNaN(param)) {
        return "Not a Number";
    } else if (!isNaN(param) && parseInt(param)%2===0) {
        return "Even";
    } else {
        return "Odd";
    }

};

console.log(evenOrOdd("ko"));