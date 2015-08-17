'use strict';
var assert = require('assert');
var arrayInsert = require('./');

it('should add item at correct position', function () {
	assert.deepEqual(arrayInsert([1, 2, 4], 2, 3), [1, 2, 3 ,4]);
});

it('should not modify the old array', function () {
	var oldArr = [1, 2, 4];
	var newArr = arrayInsert(oldArr, 2, 3);
	assert.deepEqual(oldArr, [1, 2 ,4]);
});

it('should return a new array', function () {
	assert.notEqual(arrayInsert([1, 2, 4], 2, 3), [1, 2, 3 ,4]);
});
