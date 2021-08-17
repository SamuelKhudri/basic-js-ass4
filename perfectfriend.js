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



