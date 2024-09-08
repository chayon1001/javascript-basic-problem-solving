function avgOdd (numbers){
    // console.log(numbers);

    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number)
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
        
    }
    console.log(sum);
    const count = odds.length;
    // console.log(count);
    const final = sum / count ;
    console.log(final);

}

const numbers = [2, 5, 7, 9, 4, 6, 8, 11];
avgOdd(numbers);
