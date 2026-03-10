function removeDuplicate(arr : number[]) {

    const result = [...new Set(arr)];
    return result;

}

console.log(removeDuplicate([1,4,5,2,2,2,4,2]));