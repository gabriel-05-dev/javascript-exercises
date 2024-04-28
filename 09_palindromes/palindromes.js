const palindromes = function (string) {
    string = string.toLowerCase();
    let word = string.split('');
    let palindrome = string.split('');
    palindrome = palindrome.reverse().join("")
    palindrome = palindrome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '')
    word = word.join("")
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '')
    if (word === palindrome) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;

