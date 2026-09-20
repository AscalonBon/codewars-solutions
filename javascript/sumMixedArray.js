function sumMix(x){
    return Array.from(x).reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);
}