function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor

let endOrNot = (str.slice(str.length - target.length) == target);


return endOrNot;
}

confirmEnding("Bastian", "tian");