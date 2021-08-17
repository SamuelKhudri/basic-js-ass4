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











