const isPalindrome = (word) => {
    let firstHalf = "";
    let secondHalf = "";
    if (word.length % 2 === 0) {
        for (let i = 0; i < word.length; i++) {
            if (i < word.length/2) {
                firstHalf += word[i];
            } else {
                secondHalf += word[i];
            }
        }
    } else {
        for (let x = 0; x < word.length; x++) {
            let middleNumber = (word.length -1) / 2; 
            return middleNumber;
            if (x < (word.length-1) /2) {
                firstHalf += word[x];
            } else {
                secondHalf += word[x];
            };
    } 
}};

console.log(isPalindrome("yeshi"));