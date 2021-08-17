//4 perfectFriend

function perfectFriend(names) {
    for (const name of names) {

        if (name.length == 5) {
            return name;
        }
    }
};
let inputNamesA = ['raihan', 'rakib', 'sakib', 'jabir', 'rashik', 'rana', 'roni'];
let output = perfectFriend(inputNamesA);
console.log(output, '"your unique close friend"');