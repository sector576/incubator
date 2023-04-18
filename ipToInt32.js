function ipToInt32(ip){
    return ip.split('.').reduce( (accumulator, currentValue,i) => accumulator + +currentValue * 2**(24 - i * 8), 0 );
}

console.log( ipToInt32("128.32.10.1") );