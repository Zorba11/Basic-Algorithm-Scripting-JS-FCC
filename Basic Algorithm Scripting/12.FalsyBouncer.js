//Remove all falsy values from an array.
//
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
//Hint: Try converting each value to a Boolean.

function bouncer(arr) {
// Don't show a false ID to this bouncer.



return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false,undefined,NaN, 9]));