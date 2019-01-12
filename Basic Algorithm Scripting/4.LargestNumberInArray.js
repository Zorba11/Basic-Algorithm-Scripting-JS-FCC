function largestOfFour(arr) {
var results = [];
for (var i = 0; i < arr.length; i++) {
var largestNumber = arr[i][0];
for (var j = 1; j < arr[i].length; j++) {
if (arr[i][j] > largestNumber) {
largestNumber = arr[i][j];
}
}


results[i] = largestNumber;
}


return results;
}


console.log(largestOfFour([[-25, -3, -80, -9], [13, 27, 18, 26], [32, 35, 37, 2000], [1000, 3001, 857, 1]]));