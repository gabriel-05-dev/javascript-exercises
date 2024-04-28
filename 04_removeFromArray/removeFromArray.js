const removeFromArray = function(array, ...args) {
    let new_list = [];
    array.forEach(items => {
        if (!args.includes(items)) {
            new_list.push(items);
        }
    });
    return new_list;
}

// Do not edit below this line
module.exports = removeFromArray;


// iterate over arguments starting from [arguments[1 ->> onwards]]
// if the item from arguments one is present from the list continue.
// else push arguments onto a new list