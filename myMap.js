// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

/*
var arrayOfValues = [1,2,3,4];
*/
function myMap(arr, callback) {

//  CODE INSIDE HERE   //
	var newArray = [];

	for (var i = 0;  i  <= arr.length - 1; i++) {
	 	var currentValue = arr[i];
	 	var newVar = callback(currentValue, i, arr);
	 	newArray.push(newVar);
	 	
	}
	
	return newArray;
}
/*
function multiplyArrays(value1) {
	var newVar = value1 * 2;
	return newVar;

}

function printArray(values) {
	console.log(values);
}
*/


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
