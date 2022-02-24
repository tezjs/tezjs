module.exports = function (text) {
    return text && text.length > 100 ? text.substr(0, 100) : text; 
}
 