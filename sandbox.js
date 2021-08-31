function stampDutyCalc(propertyValue) {

    let taxableBracketOne = 0;
    let taxableBracketTwo = 0;
    let taxableBracketThree = 0;
    let taxableBracketFour = 0;

    if(propertyValue <= 250000) {
        return "£" + 0 + " payable."
    }

    else if(propertyValue > 250005 && propertyValue <= 925005) {
        taxableBracketOne = propertyValue - 250000;
        let taxAmount = bracketOne(taxableBracketOne)
        return "£" + taxAmount + " payable.";
    }

    else if(propertyValue > 925000 && propertyValue <= 1500000) {
        taxableBracketOne = 675000;
        let tax1 = bracketOne(taxableBracketOne)
        taxableBracketTwo = propertyValue - 925000;
        let tax2 = bracketTwo(taxableBracketTwo)
        let taxAmount = tax1 + tax2;
        return "£" + taxAmount + " payable."
    }

    else if(propertyValue > 1500000 && propertyValue <= 2500000) {
        taxableBracketOne = 675000;
        let tax1 = bracketOne(taxableBracketOne)
        taxableBracketTwo = 575000
        let tax2 = bracketTwo(taxableBracketTwo)
        taxableBracketThree = propertyValue - 1500000
        let tax3 = bracketThree(taxableBracketThree)
        let taxAmount = tax1 + tax2 + tax3;
        return "£" + taxAmount + " payable."
    }

    else if(propertyValue > 2500000) {
        taxableBracketOne = 675000;
        let tax1 = bracketOne(taxableBracketOne)
        taxableBracketTwo = 575000
        let tax2 = bracketTwo(taxableBracketTwo)
        taxableBracketThree = 1000000
        let tax3 = bracketThree(taxableBracketThree)
        taxableBracketFour = propertyValue - 2500000; 
        let tax4 = bracketFour(taxableBracketFour);
        let taxAmount = tax1 + tax2 + tax3 + tax4;
        return "£" + taxAmount + " payable."
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

    function bracketFour(value) {
        return (value / 100) * 17.5;
    }
}

console.log(stampDutyCalc(3000000))

module.exports = stampDutyCalc;