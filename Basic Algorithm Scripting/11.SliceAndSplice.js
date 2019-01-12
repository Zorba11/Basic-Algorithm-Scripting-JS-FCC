//You are given two arrays and an index.
//
//Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.
//
//Begin inserting elements at index nof the second array.
//
//Return the resulting array. The input arrays should remain the same after the function runs.




function frankenSplice(arr1, arr2, n) {
// It's alive. It's alive!
var arr1Dup = [...arr1];
var arr2Dup = [...arr2];

//duplicating the arrays so the original arrays won't change as per the question.
var arrTemp1 = arr2Dup.splice(n);


// console.log(arrTemp1);
// console.log(arr2Dup);

for(var i=0; i<arrTemp1.length; i++){

arr1Dup.push(arrTemp1[i]);
}
// console.log(arr1Dup);

for(var j=arr2Dup.length-1; j>=0; j--){

arr1Dup.unshift(arr2Dup[j]);
}

return arr1Dup;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

frankenSplice([1, 2, 3], [4, 5, 6], 1);
