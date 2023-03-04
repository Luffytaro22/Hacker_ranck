function birthday(s, d, m) {
    // Write your code here
    let arr_m = [];
    let j = 0;
    for(let index in s){
        arr_m.push(s.slice(index,m + j));
        j++;
    }
    let result = arr_m.filter((x) => x.reduce((i,o) => i + o,0) == d);
    return result.length;
}
console.log(birthday([1,2,1,3,2],3,2))