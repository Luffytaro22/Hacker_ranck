h=[1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let word_sub = Array.from('zaba'); 
var indice = [];
var res = [];
var area;
for(let i = 0; i < word_sub.length; i++){
    indice.push(letter.indexOf(word_sub[i]));
}
console.log(indice);
    for(let i = 0; i < indice.length; i++){
         res.push(h[indice[i]]);
    }
console.log(res);
var mayor = Math.max(...res);
console.log(mayor);
area = mayor * word_sub.length;
console.log(area);
console.log(word_sub);
console.log(letter)