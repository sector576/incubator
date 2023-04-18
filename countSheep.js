var countSheep = function (num){
    let str = '';

    for(let i = 0; i < num; i++){
        str += `${i + 1} sheep...`;
    }
    return str;
}

console.log(countSheep(4));

//countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``