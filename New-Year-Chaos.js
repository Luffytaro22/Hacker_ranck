function minimumBribes(q) {
    // Write your code here
    let count = 0;
    let result;
    //Con esta función se crea un nuevo arrelgo "sort" sin alterar el arreglo original "q".
    function sorted(q){
        let sort = [...q];
        return sort.sort(function(a,b){return a - b});
    }
    console.log(q)
    console.log(sorted(q))
    if(q[0] == q.length){
        console.log('Too chaotic');
    }
    for(let i = 0; i < q.length; i++){
        if(q[i] != sorted(q)[i]){
            if(Math.abs(q.indexOf(sorted(q)[i]) - i) >= 3){
                result = 'Too chaotic';
                break;
            }else{result = ''}
        }
    }
    if(result == 'Too chaotic'){console.log('Too chaotic')}    
    else{
        
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
        console.log(count);
    }
}
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
