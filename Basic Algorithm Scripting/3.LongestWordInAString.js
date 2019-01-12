function findLongestWordLength(str) {

let strArr = str.split(' '); 


 //if you dont put a space in the split the formed array will 't','h','e' and so on.


let greater = 0;
for(let i=0; i<strArr.length; i++){

if(strArr[i].length > greater){
greater = strArr[i].length;
}
}


return greater;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");