const {encodeRLE, decodeRLE} = require('./workshop.js');

console.log(encodeRLE("AAAAABBBB"));

let text="12A5C";
console.log(decodeRLE(text));

