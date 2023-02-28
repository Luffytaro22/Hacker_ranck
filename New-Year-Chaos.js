function minimumBribes(q) {
    // Write your code here
    let count = 0;
    if(q[0] == q.length){
        console.log('Too chaotic');
    }else{
        for(let j = 0; j < Math.floor(q.length/2);j++){
            for(let i = 0; i < q.length - 1; i++){
                if(q[i + 1] < q[i]){
                    let aux = q[i];
                    q[i] = q[i + 1];
                    q[i + 1] = aux;
                    count++;
                }
            }
        }
        if(q[q.length-1] - q[0] != q.length - 1){
            console.log('Too chaotic');
        }else{
            console.log(count);
        }
    }
}
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
