
function repeatedString(s, n) {
    // Write your code here
    var count_a = 0;
    if(s === 'a'){
        return n;
    }else{
    var s1 = s.repeat(n/2);
    console.log(s1[1])
    for(let i = 0; i < n; i++){
        if(s1[i] == 'a'){
            count_a++;
        }
    }
    return count_a;
    }
}

