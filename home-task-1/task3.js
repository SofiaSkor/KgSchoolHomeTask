function solveQuadraticEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
        console.log('solution missing')
    }
    else if (d == 0) {
        let x = -b / (2 * a);
        console.log(x)
    }
    else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log (x1,x2)
    }
}

console.log(solveQuadraticEquation(1, -1, -2)); // -1, 2
