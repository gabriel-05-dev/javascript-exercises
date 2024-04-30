const fibonacci = function(num) {
    if (num === 0 || num == "0") {
        return 0
    } else if (num < 0) {
        return "OOPS"
    } else if (num === 1 || num === "1") {
        return 1
    } else if (num > 1) {
        return fibonacci(num-1) + fibonacci(num-2)
    }
};



/*
function F(n)  if n = 0
   return 0  if n = 1
   return 1  else
   return F(n-1) + F(n-2)
   */
// Do not edit below this line
module.exports = fibonacci;

