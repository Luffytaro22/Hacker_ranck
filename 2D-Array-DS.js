function hourglassSum(arr) {
    // Write your code here
    var total = [];
    let sum;
    for(let x = 0; x < 4; x++){     //columnas
        for(let y = 0; y < 4; y++){     //filas
            sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            // get the middle of hourglass
            sum += arr[y+1][x+1];
            // sum the bottom of hourglass
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            total.push(sum);
        }
    }
    total = Math.max(...total);
}
(hourglassSum([[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0]]))

