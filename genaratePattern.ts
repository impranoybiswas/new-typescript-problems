const trianglePattern = (n: number, s: string = "#") => {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += s + " ";
        }
        result += "\n";
    }
    return result;
}

export { trianglePattern }
