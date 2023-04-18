function findUniq(arr) {
    const filtArr = arr.filter(el => el === arr[0]);

    return filtArr.length === 1 ? filtArr[0] : ( arr.filter(el => el !== arr[0]) )[0] ;
    //return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]));