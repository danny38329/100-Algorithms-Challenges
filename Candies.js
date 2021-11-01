const candies = (numChildren, candyPieces) => {
    if (candyPieces % numChildren === 0) {
        console.log(candyPieces);
    } else {

    let x = candyPieces % numChildren;
    let totalAvailable = candyPieces - x;
    console.log(totalAvailable);
    }

};

candies(3,12);
