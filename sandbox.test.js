const stampDutyCalc = require('./sandbox')

test('correctly calculates LBTT for property less than £250000', () => {
    expect(stampDutyCalc(150000)).toBe('£0 payable.')
})

test('correctly calculates LBTT for property between £250001 and £925000', () => {
    expect(stampDutyCalc(600000)).toBe('£17500 payable.')
})

test('correctly calculates LBTT for property between £925001 and £1500000', () => {
    expect(stampDutyCalc(1000000)).toBe('£41250 payable.')
})

test('correctly calculates LBTT for property above £150000', () => {
    expect(stampDutyCalc(3000000)).toBe('£271250 payable.')
})