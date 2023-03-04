function getTotalX(a, b) {
    // Write your code here
    let inicial = a[a.length - 1];
    let num = [inicial];
    let counta = 0;
    let countb = 0;
    let result = [];
    while(num[num.length - 1] < b[0]){
        inicial = inicial + 1
        if(inicial % a[a.length - 1] == 0){
            num.push(inicial);
        }
    }
    for(let i of num){
        for(let j of a){
            i % j == 0 ? counta += 1 : counta += 0;
        }
        for(let j of b){
            j % i == 0 ? countb += 1 : countb += 0;
        }
        if(counta == a.length && countb == b.length){
            result.push(i);
        }
        counta = 0;
        countb = 0;
    }
    return result.length;
}

console.log(getTotalX([2, 4],[16, 32, 96]))