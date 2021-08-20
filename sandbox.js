let taxableBracketOne = 0;
let taxableBracketTwo = 0;
let taxableBracketThree = 0;


function stampDutyCalc(propertyValue) {
    if(propertyValue <= 250000) {
        return "£" + 0 + " payable."
    }

    if(propertyValue > 250000 && propertyValue <= 925000) {
        taxableBracketOne = propertyValue - 250000;
        let taxAmount = bracketOne(taxableBracketOne)
        return "£" + taxAmount + " payable.";
    }

    if(propertyValue > 925000 && propertyValue <= 1500000) {
        taxableBracketOne = 675000;
        let tax1 = bracketOne(taxableBracketOne)
        taxableBracketTwo = propertyValue - 925000;
        let tax2 = bracketTwo(taxableBracketTwo)
        let taxAmount = tax1 + tax2;
        return "£" + taxAmount + " payable."
    }

    if(propertyValue > 1500000) {
        taxableBracketOne = 675000;
        let tax1 = bracketOne(taxableBracketOne)
        taxableBracketTwo = 575000
        let tax2 = bracketTwo(taxableBracketTwo)
        taxableBracketThree = propertyValue = 1500000
        let tax3 = bracketThree(taxableBracketThree)
        let taxAmount = tax1 + tax2 + tax3;
        return "£" + taxAmount + " payable."
    }
}

function bracketOne(value) {
    return (value / 100) * 5;
}

function bracketTwo(value) {
    return (value / 100) * 10;
}

function bracketThree(value) {
    return (value / 100) * 12;
}


console.log(stampDutyCalc(50000))