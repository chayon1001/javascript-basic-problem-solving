const friends = ['rahim', 'karim', 'rahim','salim', 'salim'];
const numbs = [1, 2, 1, 2, 5, 5, 7, 4, 6];


function noDuplicate (array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;

}

const final = noDuplicate(numbs);
console.log(final);