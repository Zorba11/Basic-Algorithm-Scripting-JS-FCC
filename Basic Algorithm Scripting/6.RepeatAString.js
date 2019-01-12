function repeatStringNumTimes(str, num) {
// repeat after me

if(num<0){
return'';
}

let repStr='';
let i=num;

while(i>0){

repStr+=str;
i--;
}
return repStr;
}


repeatStringNumTimes("abc", 3);