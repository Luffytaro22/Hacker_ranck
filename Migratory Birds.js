function migratoryBirds(arr) {
    // Write your code here
    let count_1 = 0;
    let count_2 = 0;
    let count_3 = 0;
    let count_4 = 0;
    let count_5 = 0;
    for(let number of arr){
        number == 1 ? count_1 += 1 : count_1 += 0;
        number == 2 ? count_2 += 1 : count_2 += 0;
        number == 3 ? count_3 += 1 : count_3 += 0;
        number == 4 ? count_4 += 1 : count_4 += 0;
        number == 5 ? count_5 += 1 : count_5 += 0;
    }
    let elementos = [count_1,count_2,count_3,count_4,count_5];
    let repetidos = [];
    let temporal = [];
    console.log(elementos)
    elementos.forEach((value,index)=>{
    temporal = Object.assign([],elementos); 
    temporal.splice(index,1); 
    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1){repetidos.push(value)};
    });
    if(repetidos != [] && Math.max(...repetidos) == Math.max(...elementos)){
        return elementos.indexOf(Math.max(...elementos)) + 1;
    }else{
        return elementos.indexOf(Math.max(...elementos)) + 1;
    }
}
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))