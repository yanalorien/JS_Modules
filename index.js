const helpers = require('./helpers');

console.log('Hello PASV');

const r = helpers.add(2, 3);
const r2 = helpers.minus(2, 3);

console.log(r, r2);

//2 способ записи
// const { add } = require('./helpers');
// const r = add(2, 3);
// console.log(r);