// simple logic
function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

// const isLipi = isLeapYear(2040);
// console.log(isLipi);



// hard logic


function isLeap (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }

    else{
        return false;
    }
}

const isleap1 = isLeap(2100);
const isleap2 = isLeap(2400);
const isleap3 = isLeap(1900);
const isleap4 = isLeap(2052);
console.log(isleap1, isleap2, isleap3, isleap4);
