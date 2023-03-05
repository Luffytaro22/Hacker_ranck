function getMoneySpent(keyboards, drives, b) {
    let mayor;
    let menor;
    let suma = [];
    // El primer filtro seria si el valor minimo de cada uno supera el presupuesto.
    if(Math.min(...keyboards) >= b || Math.min(...drives) >= b){
        return '-1';
    }
    //El segundo filtro es para el caso especifico de que ambos tengan un solo precio.
    if(keyboards.length == drives.length == 1){
        if(keyboards + drives <= b){
            return keyboards + drives;
        }else{ return '-1';}
    }
    // El tercero es para asignar un arreglo mayor y uno menor
    if(keyboards.length > drives.length){
        mayor = [...keyboards];
        menor = [...drives];
    }else{
        mayor = [...drives];
        menor = [...keyboards];
    }
    // En este ciclo se suma cada elementos del arrrglo mayor con cada uno del menor, y si el resultado es menor que el presupuesto,
    // se incluye en el arreglo 'suma'.
    for(let number of mayor){
        for(let num of menor){
            if(number + num <= b){
                suma.push(number + num);
            }
        }
    }
    // Si el arreglo no es vacio, se va a mostrar lo maximo que se puede gastar, y si el arreglo es vacio da -1.
    if(suma == []){
        return '-1';
    }else{ return Math.max(...suma);}
}
console.log(getMoneySpent(4,5,5))