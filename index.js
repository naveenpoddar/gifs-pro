const gifs = require('./gifs.json');

var slap = function getSlapGif() {
    var arr2222 = gifs.slap;
    var gif = arr2222[Math.floor(Math.random() * arr2222.length)];
    return gif;
}

var clap = function getClapGif() {
    var arr2222 = gifs.clap;
    var gif = arr2222[Math.floor(Math.random() * arr2222.length)];
    return gif;
}

var hug = function getHugGif() {
    var arr2222 = gifs.hug;
    var gif = arr2222[Math.floor(Math.random() * arr2222.length)];
    return gif;
}

module.exports = {
    getSlapGif: slap,
    getClapGif: clap,
    getHugGif: hug
}