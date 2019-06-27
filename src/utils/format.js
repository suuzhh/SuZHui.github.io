const crypto = require('crypto');

const base64 = (title = '') => {
    const md5 = crypto.createHash('md5');
    return md5.update(title).digest('hex');
    // return Buffer.from(title).toString('base64').replace('/', 'e').replace('=', 'e');
    // return btoa(encodeURIComponent(title));
}

module.exports = {
    base64
}