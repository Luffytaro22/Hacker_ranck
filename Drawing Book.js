function pageCount(n, p) {
    // Write your code here
    let paginas = [[1]];
    for(let i = 2; i <= n; i++){
        paginas.push([i,i+1]);
        i++;
    }
    // paginas crea un array en el cual en cada indice hay una o dos paginas (como en un libro).
    // arr_1 devuelve el arreglo en donde esta ubicada la pagina p.
    // num_paginas_frontal devuelve el indice en donde esta la pagina en el arreglo 'paginas'.
    // num_paginas_trasera devuelve lo mismo que el anterior, pero empezando desde la parte trasera del libro.
    let arr_1 = paginas.filter(x => x.includes(p));
    let num_paginas_frontal = paginas.indexOf(arr_1[0]);
    let num_paginas_trasera = paginas.length - (paginas.indexOf(arr_1[0])+1);
    
    return Math.min(num_paginas_frontal,num_paginas_trasera);
}
console.log(pageCount(5,3))