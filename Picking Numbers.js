function pickingNumbers(a) {
    // Write your code here
    let result = [];
    let long = []; 
    let j = 0;
    a.sort((a,b) => a-b);
    let b = a[0];
    console.log(a)
    if(a.every(x => x== b)){
        long.push(a.length);
    }
    for(let i = 0; i < a.length; i++){
        if(a[i] > b + 1){
            console.log(i)
            console.log(a.slice(j,i))
            result[i] = a.slice(j,i);
            long.push(result[i].length);
            b = a[i];
            j = i;
            console.log(b)
        }
        if(a[a.length-1] === b + 1){
            console.log(i)
            result[i] = a.slice(a.indexOf(b),a.length);
            long.push(result[i].length);
            break;
        }
        else{ continue;}
    }
    return Math.max(...long);
}
console.log(pickingNumbers([1,1,1,1,1,1,1]))