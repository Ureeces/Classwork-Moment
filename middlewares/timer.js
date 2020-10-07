const moment = require('moment');

// Middleware
function timer(req, res, next) {
    console.log('Last response: ', moment().format('LLL'));
    next();
}

module.exports = timer;