function howSumTabulation(target, numBank){
const table = Array(target + 1).fill(null);
table[0] =[];

for(let i =0; i<= target; i++){
    if(table[i] !== null){
        for(let num of numBank){
         table[i+num] = [...table[i], num];

        }
    }
}

return table[target];
}

console.log(howSumTabulation(100, [2,30,50]));