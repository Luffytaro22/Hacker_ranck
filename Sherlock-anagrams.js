function sherlockAndAnagrams(s) {
    // Write your code here
    var arr = [];
    var count = 0;
    var caracteres = 0;
    for(let i = 0; i < s.length - 1; i++){
        for(let j = i + 2; j <= s.length; j++){
            arr.push(s.slice(i, j).split('').sort().join(''));
        }  
    }
    for(let i = 0; i < s.length - 1; i++){
        for(let j = i + 1; j < s.length; j++){
            if(s[i] === s[j]){
                caracteres++;
            }
        }
    }
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
               count++;
            }
        }
    }
    /*for(let i = 0; i < s.length; i++){
        if(s.includes(s[i])){
            caracteres++;
        }
    }
    console.log(caracteres)
    for(let i = 0; i < arr.length; i++){
        if(arr.splice(i,1,0).includes(arr[i])){
            count++;
        }
    }*/
    /*caracteres = s.split('').filter((c, i, a)=>a.indexOf(c) !== i).length;
    console.log(caracteres)
    var arr_orden = arr.map(x => (x.split('').sort().join('')));
    count = arr_orden.filter((c, i, a)=>a.indexOf(c) !== i).length;
    console.log(count)*/
    return caracteres + count;
}
console.log(sherlockAndAnagrams('cdcd'));
