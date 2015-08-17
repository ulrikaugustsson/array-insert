'use strict';
module.exports = function (arr, pos, item) {
	var newArr;
	if (Array.isArray(arr) === false) {
		newArr = [arr];
	} else {
		newArr = arr.slice();
	}

	newArr.splice(pos, 0, item);
	return newArr;
};
