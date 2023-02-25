
function repeatedString(s, n) {
    // Write your code here
    var count_a = 0;
    var s1;
    if(s === 'a'){
        return n;
    }else{
        if(n > s.length){
            s1 = s.repeat(Math.ceil(n/s.length));
        }else{
            s1 = s.repeat(n/2);
        }
    for(let i = 0; i < n; i++){
        if(s1[i] == 'a'){
            count_a++;
        }
    }
    return count_a;
    }
}

