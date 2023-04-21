function landPerimeter(arr) {
    let P = 0;

    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr[x].length; y++){
            if(arr[x][y] === 'X'){
                (x === 0 || arr[x-1][y] !== 'X') ? P += 1 : P;
                (x === arr.length-1 || arr[x+1][y] !== 'X') ? P += 1 : P;
                (y === 0 || arr[x][y-1] !== 'X') ? P += 1 : P;
                (y === arr[x].length-1 || arr[x][y+1] !== 'X') ? P += 1 : P;
            }
        }
    }
    
    return `Total land perimeter: ${P}`;
}

console.log( landPerimeter(['XOOXO',
                            'XOOXO',
                            'OOOXO',
                            'XXOXO',
                            'OXOOO']) );