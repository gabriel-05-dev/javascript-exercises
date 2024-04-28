const repeatString = function(string, num) {
    let counter = 0;
    let string_lst = [];
    const err_msg = "ERROR"
    do {
        if (num >0) {
            string_lst.push(string);
            num--
        } else if (num ===0) {
            return ""
        } else if (num < 0) {
            return err_msg
        }
    } while (counter < num)

    return(string_lst.join(""))
};

// Do not edit below this line
module.exports = repeatString;
