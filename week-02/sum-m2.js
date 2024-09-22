// ary: number array
function sum(ary) {
    // use forEach to iterate the array 
    let result = 0;
    ary.forEach(item => result += item);
    return result;
}

console.log(sum([1, 5, 3, 2])); // 11
