function jumpingOnClouds(c, k) {
    let n = c.length;
    let e = 100;
    let i = 0;
    while(i >= 0){
        e -= 1;
        if(c[(i+k)%n] == 1){
            e -= 2;
        }
     
        i += k;
        if((i+k)%n == 0){
            if(k != n){
                e -= 1;
                if(c[(i+k)%n] == 1){
                    e -= 2;
                }
            }
            break;
        }  
    }
    return e;
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2);