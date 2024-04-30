const findTheOldest = function(object_array) {
    return object_array.reduce((oldest, current) => {
        const oldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const current = getAge(current.yearOfBirth, current.yearOfDeath);
    

    return oldest < current ? current : oldest;
    })
};

function getAge(YOB, YOD) {
    if (!YOD) {
        YOD = new Date().getFullYear;
    }
    return YOD - YOB
}

// Do not edit below this line
module.exports = findTheOldest;
