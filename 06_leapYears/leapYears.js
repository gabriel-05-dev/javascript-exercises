const leapYears = function(year) {
    return (year % 4 ==0 && year % 100 != 0 || year % 400 == 0)
};

// Do not edit below this line
module.exports = leapYears;


/* 

if years MOD 4 = 0 then leap year == true Else if (see blow)
if years % 100 == 0 and years % 400 == 0 -> Then it is a leapyear.
*/