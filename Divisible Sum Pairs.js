function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let arr = [];
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
                arr.push([ar[i],ar[j]]);
        }
    }
    let result = arr.filter(x => x.reduce((suma,a) => suma + a,0) % k == 0);
    return result.length;
}
console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]))