function formingMagicSquare(s) {
    // Write your code here
    let diferencia_filas;
    let diferencia_columnas;
    let diferencia_diagonal;
    let result_columnas = [];
    let result_filas = [];
    let result_diagonal = [];
    
    do{
    for(let i = 0; i < s.length; i++){
        result_filas[i] = [];
        if(s[i][0] + s[i][1] + s[i][2] != 15){
            diferencia_filas = Math.abs(s[i][0] + s[i][1] + s[i][2] - 15);
            result_filas[i].push(diferencia_filas);
            if(s[i][0] + diferencia_filas <= 9){
                s[i][0] = s[i][0] + diferencia_filas;
            }else{
                if(s[i][1] + diferencia_filas <= 9){
                    s[i][1] = s[i][1] + diferencia_filas;
                }else{
                    s[i][2] = s[i][2] + diferencia_filas;
                }
                }
        }
    }
    for(let i = 0; i < s.length; i++){
        result_columnas[i] = [];
        if(s[0][i] + s[1][i] + s[2][i] != 15){
            diferencia_columnas = Math.abs(s[0][i] + s[1][i] + s[2][i] - 15);
            result_columnas[i].push(diferencia_columnas);
            if(s[0][i] + diferencia_columnas <= 9){
                s[0][i] = s[0][i] + diferencia_columnas;
            }else{
                if(s[1][i] + diferencia_columnas <= 9){
                    s[1][i] = s[1][i] + diferencia_columnas;
                }else{
                    s[2][i] = s[2][i] + diferencia_columnas;
                }
            }
        }
    }
   
        if(s[0][0] + s[1][1] + s[2][2] != 15){
            diferencia_diagonal = Math.abs(s[0][0] + s[1][1] + s[2][2] - 15);
            result_diagonal.push(diferencia_diagonal);
            if(s[0][0] + diferencia_diagonal <= 9){
                s[0][0] = s[0][0] + diferencia_diagonal;
            }else{
                if(s[1][1] + diferencia_diagonal <= 9){
                    s[1][1] = s[1][1] + diferencia_diagonal;
                }else{
                    s[2][2] = s[2][2] + diferencia_diagonal;
                }
            }
        }
        if(s[2][0] + s[1][1] + s[0][2] != 15){
            diferencia_diagonal = Math.abs(s[2][0] + s[1][1] + s[0][2] - 15);
            result_diagonal.push(diferencia_diagonal);
            if(s[2][0] + diferencia_diagonal <= 9){
                s[2][0] = s[2][0] + diferencia_diagonal;
            }else{
                if(s[1][1] + diferencia_diagonal <= 9){
                    s[1][1] = s[1][1] + diferencia_diagonal;
                }else{
                    s[2][0] = s[2][0] + diferencia_diagonal;
                }
            }
        }
    }while(s[0][0] + s[0][1] + s[0][2] != 15 || s[1][0] + s[1][1] + s[1][2] != 15 || s[2][0] + s[2][1] + s[2][2] != 15 || s[0][0] + s[1][0] + s[2][0] != 15 || s[0][1] + s[1][1] + s[2][1] != 15 || s[0][2] + s[1][2] + s[2][2] != 15 || s[0][0] + s[1][1] + s[2][2] != 15 || s[2][0] + s[1][1] + s[0][2] != 15)
    console.log(s);
    console.log(result_filas)
    console.log(result_columnas)
    result_columnas = result_columnas.map(x => x.reduce((a,b) => a+b,0));
    result_filas = result_filas.map(x => x.reduce((a,b) => a+b,0));
    return Math.min(result_columnas, result_filas);
}
console.log(formingMagicSquare([[4, 9, 2],[3, 5, 7],[8, 1, 5]]));