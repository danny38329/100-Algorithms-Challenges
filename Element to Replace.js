const arrayReplace = (elemReplace, subElement,...inputArray) => {
    let revisedArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == elemReplace) {
            
            revisedArray.push(subElement);
            
        } else {
            revisedArray.push(inputArray[i]);
        };
        
    }
    return revisedArray;
}

console.log(arrayReplace(6, 9, [2,3,4,5,6,6,7,6,7,6]));