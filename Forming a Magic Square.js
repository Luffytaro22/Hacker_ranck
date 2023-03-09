function formingMagicSquare(s) {
    // Write your code here
    let square1 = [[4,3,8],[9,5,1],[2,7,6]];
    let square1_mirror = [[8,3,4],[1,5,9],[6,7,2]];
    let square2 = [[2,9,4],[7,5,3],[6,1,8]];
    let square2_mirror = [[4,9,2],[3,5,7],[8,1,6]];
    let square3 = [[6,7,2],[1,5,9],[8,3,4]];
    let square3_mirror = [[2,7,6],[9,5,1],[4,3,8]];
    let square4 = [[8,1,6],[3,5,7],[4,9,2]];
    let square4_mirror = [[6,1,8],[7,5,3],[2,9,4]];
    let magic_squares = [square1, square1_mirror, square2, square2_mirror, square3, square3_mirror, square4, square4_mirror];
    console.log(s[0].indexOf(s[0][1]))
    let dif = new Array(8).fill(0);
    
    for(let i = 0; i < magic_squares.length; i++){
        for(let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                if(magic_squares[i][j][k] != s[j][k]){
                    dif[i] += Math.abs(magic_squares[i][j][k] - s[j][k])
                }
            }
        }
    }
    console.log(dif)
    return Math.min(...dif);
    }
console.log(formingMagicSquare([[4, 9, 2],[3, 5, 7],[8, 1, 5]]));