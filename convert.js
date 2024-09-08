// inch to feet conversion

//  12 inch = 1 ft 

function inchToFeet (inch){
    let feet = inch / 12;
    const feetInt = parseInt(feet);
    const inchRes = inch % 12;

    const result = feetInt + ' ft ' + inchRes + ' inch';

    return result;

}

const res = inchToFeet(76);
console.log(res);