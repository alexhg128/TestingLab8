var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');
var OctalConverter = require('../OctalConverter');

describe('givenTwoIntegersWhenSumThenSucess()', () => {

    it('sum(1, 2) = 3', () => {
        
        //Given
        var a = 1;
        var b = 2;
        var expectedResult = 3;

        //When
        var actualResult = javascriptFunctions.sum(a,b);

        //Then
        assert.equal(expectedResult, actualResult);
    });

});

describe('givenADecimalNumberWhenConvertToOctalThenSuccess()', () => {

    it('convert(1) = 1', () => {
        // Given
        var decimal = 1;
        var expectedResult = 1;
        //When
        var actualResult = OctalConverter.convert(decimal);
        // Then
        assert.equal(expectedResult, actualResult);
    });

    it('convert(2) = 2', () => {
        // Given
        var decimal = 2;
        var expectedResult = 2;
        //When
        var actualResult = OctalConverter.convert(decimal);
        // Then
        assert.equal(expectedResult, actualResult);
    });

    it('convert(8) = 10', () => {
        // Given
        var decimal = 8;
        var expectedResult = 10;
        //When
        var actualResult = OctalConverter.convert(decimal);
        // Then
        assert.equal(expectedResult, actualResult);
    });

    it('convert(95) = 137', () => {
        // Given
        var decimal = 95;
        var expectedResult = 137;
        //When
        var actualResult = OctalConverter.convert(decimal);
        // Then
        assert.equal(expectedResult, actualResult);
    });

    it('convert(2048) = 4000', () => {
        // Given
        var decimal = 2048;
        var expectedResult = 4000;
        //When
        var actualResult = OctalConverter.convert(decimal);
        // Then
        assert.equal(expectedResult, actualResult);
    });

});