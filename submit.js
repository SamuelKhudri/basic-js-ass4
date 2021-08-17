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

// ----second problem start----

function totalSales(shirt, pant, juta) {
    if ((typeof shirt >= 0 && typeof pant >= 0) && (typeof juta >= 0)) {
        console.log('you take the right choice');
    }
    if ((typeof shirt < 0 || typeof pant == 'string') || (typeof juta < 0 || typeof juta != 'number')) {
        return 'sorrry your input is wrong';
    }
    console.log(shirt, 'shirt', pant, 'pant', juta, 'juta');

    let shirtprice = 100;
    let pantprice = 200;
    let jutaprice = 500;

    // fixed price for every product
    const shirtTcost = shirt * shirtprice;
    console.log(shirtTcost, 'total shirt cost');
    const pantTcost = pant * pantprice;
    console.log(pantTcost, 'total pant cost');
    const jutaTcost = juta * jutaprice;
    console.log(jutaTcost, 'total juta cost');
    const totalBuyCost = (shirtTcost + pantTcost + jutaTcost);
    return totalBuyCost;
};
// let input2 = totalSales('sss', 'ss2', 1);
let input2 = totalSales(4, 3, 2);
console.log(input2, '"SIR" you need to pay this money');

//------problem second completed----------

//---- problem third start///////
function deliveryCost(product) {
    if (product >= 1) {
        console.log('you choose right input')
    }
    console.log(product, '<your input>');
    let first100p = 100;
    let second100p = 80;
    let thirdUpto200 = 50;
    // every price based one per delivery
    if (product <= 100) {
        const totalCF100P = (product * first100p);
        console.log('your buying product >=100');
        return totalCF100P;
    }
    // 1 - 100 already taken by first condition
    else if (product <= 200) {
        let rest100P = 100 * first100p;
        let restPFCount = product - 100;
        const restPTPrice = restPFCount * second100p;
        const totalCF200P = rest100P + restPTPrice;
        console.log('your buying product is "100<product<=200"');
        return totalCF200P;
    }

    // when product quantity > 200p
    else {
        let first100FThird = 100 * first100p;
        let second100FThird = 100 * second100p;
        let leftbefore = first100FThird + second100FThird;
        const restPFthird = product - 200;
        const restFPrice3rd = restPFthird * thirdUpto200;
        const allTotall = leftbefore + restFPrice3rd;
        console.log('your buying product is >=200')
        return allTotall;
    }
    //---short from of var p=price,P=product,F=for,C=cost,T=total--//

};
let input3 = deliveryCost(20);
console.log(input3, 'your totall delivery cost');
let input4 = deliveryCost(120);
console.log(input4, 'your totall delivery cost');
let input5 = deliveryCost(230);
console.log(input5, 'your totall delivery cost');

//----problem 3rd finished---------

//-----problem 4 start-----//
function perfectFriend(names) {
    if (typeof names != 'object') {
        return 'opps!your input is wrong';
    }
    console.log(names, 'list of your all fr9');

    for (const name of names) {
        if (name.length == 5) {
            return name;
        }
    }

};
let inputNamesA = ['roni', 'tannu', 'mannu', 'sonu', 'pannu', 'tnu'];
let output = perfectFriend(inputNamesA);
let out1 = [output];
console.log(out1, 'your unique close fr9');
//---the new name array show which names contains 5 letter----














