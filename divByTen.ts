// RETURN A BOOLEAN IF A NUMBER IS DIVISIBLE BY 10


function divByTen (num: number) {
    
    if (num % 10 === 0){
        return true;
    }
    return false;
}

console.log(divByTen(10));
console.log(divByTen(100));
console.log(divByTen(12));
console.log(divByTen(54));