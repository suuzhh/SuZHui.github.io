const base64 = (title = '') => {
    return btoa(encodeURIComponent(title));
}

module.exports = {
    base64
}