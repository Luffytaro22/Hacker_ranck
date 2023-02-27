function countTriplets(arr, r) {
    var count = 0;
    var arr_3 = [];
    var arr_2 = [];
    var arr_mult = [];
    var arr_mult2 = [];
    var triplets = [];
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = 1; (j + i) < arr.length - 1; j++){
            arr_3 = new Array(arr[i],arr.slice().splice(j + i,2));
            arr_mult.push(arr_3.join().split(',').map(x => (parseInt(x))));         //Se obtienen las combinaciones posibles en grupos de 3 como base el primer numero del arreglo arr.
        }
    }
    for(let i = 0; i < arr.length - 3; i++){
        for(let j = 3; (j + i) < arr.length; j++){
            arr_2 = new Array(arr[i],arr[i+1],arr.slice().splice(j + i,1));         //Las combinaciones de 3 tomando como base los dos primeros numeros.
            arr_mult2.push(arr_2.join().split(',').map(x => (parseInt(x))))
        }
    }
    triplets = arr_mult.concat(arr_mult2);          //Concatenar los dos arrays, dando la combinacion total del arreglo arr en grupos de 3.
    console.log(triplets)
    for(let i = 0; i < triplets.length; i++){
        if(triplets[i][1] == triplets[i][0] * r && triplets[i][1] == triplets[i][2]/r){
            count++;
        }
    }
    console.log(count);
}
countTriplets([1,2,2,4], 2)
