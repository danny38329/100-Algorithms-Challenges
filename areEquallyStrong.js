const areEquallyStrong = (myRightArm, myLeftArm, yourRightArm, yourLeftArm) => {
    if (myRightArm === yourRightArm) {
        return "Right arms are equal strength."
    } else if (myRightArm > yourRightArm) {
        return "My right is stronger."
    } else if (myRightArm < yourRightArm) {
        return "Your right is stronger."
    };

    if (myLeftArm === yourLeftArm) {
        return "Left arms are equal strength."
    } else if (myLeftArm > yourLeftArm) {
        return "My left is stronger."
    } else if (myLeftArm < yourLeftArm) {
        return "Your left is stronger."
    };
};

console.log(areEquallyStrong(10,13,23,45));