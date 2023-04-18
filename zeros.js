function zeros (n) {
    let accum = 0;

    const numDeg = num => Math.floor(num/5) === 0 ? 0 : 1 + numDeg(num / 5);
    for (let i = 0; i < numDeg(n); i++){
        accum += Math.floor( n / (5**(i+1)) );
    }
    return accum;
    //return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
}

console.log( zeros (1000) );