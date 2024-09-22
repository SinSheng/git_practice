// ary: number array
function sum(ary) {
    //check if it's an array, if yes return the sum
    if(Array.isArray(ary)){
        let result = ary.reduce((sum, item) => sum + item, 0);
        return result;
    }else{
    //if not return 1+2+...+n
        return ((1+ary)*ary) / 2
    }
}

console.log(sum([1, 5, 3, 2])); // 11
console.log(sum(5)); // 11
