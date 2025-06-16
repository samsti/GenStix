// hash.js
const bcrypt = require('bcrypt');

const plainPassword = 'Sam'; // změň dle potřeby

bcrypt.hash(plainPassword, 10).then((hash) => {
    console.log('Zahashované heslo:', hash);
});
