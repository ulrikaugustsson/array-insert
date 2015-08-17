'use strict';
var assert = require('assert');
var arrayInsert = require('./');

it('should insert a integer', function () {
	assert.deepEqual(arrayInsert([1, 2, 4], 2, 3), [1, 2, 3 ,4]);
});

it('should insert a string', function() {
	assert.deepEqual(arrayInsert(['a', 'c'], 1, 'b'), ['a', 'b','c']);
});

it('should insert a object', function() {
	assert.deepEqual(arrayInsert([{a:1}, {b:2}], 1, {c:3}), [{a:1},{c:3},{b:2}]);
});

it('should not modify the old array', function () {
	var oldArr = [1, 2, 4];
	var newArr = arrayInsert(oldArr, 2, 3);
	assert.deepEqual(oldArr, [1, 2 ,4]);
	assert.deepEqual(newArr, [1, 2, 3 ,4]);
});

it('should return a new array', function () {
	assert.notEqual(arrayInsert([1, 2, 4], 2, 3), [1, 2, 3 ,4]);
});

it('should throw TypeError if non-array is supplied', function () {
	assert.throws(function () {
		arrayInsert(1, 2, 3);
	});
});
