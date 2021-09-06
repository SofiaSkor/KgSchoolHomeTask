let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        console.log('Meow!');
    }
}
let catName = cat['name']
console.log(catName)

cat.color = 'black';
console.log(cat.color)

cat.greeting();