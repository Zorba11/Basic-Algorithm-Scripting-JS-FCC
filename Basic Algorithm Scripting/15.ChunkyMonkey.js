//Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
// Break it up.

var newArr=[];

for(var i=0; i<arr.length; i+=size){

//i=i+size makes the next session of the loop to start from the new untouched element. if you don't understand when you see this. try out each steps manually.

newArr.push(arr.slice(i,i+size));

//.slice(i,i+size) defines the width of the array.
}

return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));