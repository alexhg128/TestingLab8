function convert(decimal) {
    var result = 0;
    var result_array = [];
    var temp = decimal;
    while(true) {
        var quotient = Math.floor(temp / 8);
        var rest = temp - (quotient * 8);
        temp = quotient;
        console.log(`Temp / 8 = ${quotient} + ${rest}`);
        result_array.push(rest);
        if(quotient == 0) {
            break;
        }
    }
    for(var i = result_array.length - 1; i >= 0; i--) {
        result += (result_array.pop() * (10 ** i));
    }
    return result;
}

module.exports.convert = convert;