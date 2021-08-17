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