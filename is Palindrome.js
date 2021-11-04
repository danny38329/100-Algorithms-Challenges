const isPalindrome = (word) => {
    let firstHalf = "";
    let secondHalf = "";
    let middleNumber = 0;
    if (word.length % 2 === 0) {
        for (let i = 0; i < word.length; i++) {
            if (i < word.length/2) {
                firstHalf += word[i];
            } else {
                secondHalf += word[i];
            }
        }   
            return firstHalf === secondHalf.split("").reverse().join("");;
    } else {
        for (let x = 0; x < word.length; x++) {
             middleNumber = (word.length -1) / 2; 
            
            if (x < (word.length-1) /2) {
                firstHalf += word[x];
            } else if (x === middleNumber) {
                let middleLetter = word[x];
            }
            else {
                secondHalf += word[x];
            };
    } return firstHalf === secondHalf.split("").reverse().join("");
}  }

