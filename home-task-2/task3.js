function deleteProperty(obj, varname) {
    let obj1 = { ...obj }
    delete obj1[varname];
    return obj1;
}
const data = { a: 1, b: 2 };
console.log(deleteProperty(data, 'b'));
