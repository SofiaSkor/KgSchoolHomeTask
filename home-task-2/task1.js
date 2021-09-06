function Extend(obj1, obj2) {
    let obj3 = {}
    if (typeof obj2 === "object") {
        for (let varname in obj2) {
            obj3[varname] = obj2[varname];
        }
    }
    if (typeof obj1 === "object") {
        for (let varname in obj1) {
            obj3[varname] = obj1[varname];
        }
    }
    return obj3
}
// console.log(Extend ({a: 1, b: 2}, {c: 3}));
// console.log(Extend ({a: 1, b: 2}, {c: 3, d: 4}));
// console.log(Extend ({a: 1, b: 2}, {a: 3, c: 3}));
// console.log(Extend ({a: false, b: null}, {a: true, b: 2, c: 3}));
console.log(Extend({ a: 1, b: 2 }, 'test'));
