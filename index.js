'use strict';
module.exports = function (arr, pos, item) {
	var newArr = arr.slice();
	newArr.splice(pos, 0, item);
	return newArr;
};
