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
    }
    return firstHalf;
}

console.log(isPalindrome("yess"));