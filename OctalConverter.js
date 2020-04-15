function convert(decimal) {
    var result = 0;
    var i = 0;
    while(true) {
        var quotient = Math.floor(decimal / 8);
        result += (decimal - (quotient * 8)) * (10 ** i);
        if(quotient == 0) {
            break;
        }
        decimal = quotient;
        i++
    }
    return result;
}

module.exports.convert = convert;