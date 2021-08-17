//---- problem one seerToMon---////
function seerToMon(seer) {
    if (typeof seer != 'number') {
        return 'you type the wrong input';
    }
    else {
        console.log(seer, 'you give right input');
    }
    const exchange = (seer / 40)
    return exchange;

};

let input = seerToMon(400);
// let input = seerToMon('bby');
console.log(input, 'totall Mon');
// "you have to input the positive integer which can be devidable by 40 "
//---------- problem one finished------------