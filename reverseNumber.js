const reverseNumber = (num) =>{
    let tempNum = num;
    if(num<0){
        tempNum = -tempNum; 
    }
    let revNum = 0;
    while(tempNum>0){
        revNum = 10*revNum + tempNum%10;
        tempNum = Math.floor(tempNum/10);
    }
    return num<0 ? -revNum : revNum;
}

console.log(reverseNumber(123)) // Output: 321
console.log(reverseNumber(-123)) // Output: -321
console.log(reverseNumber(120)) // Output: 21
console.log(reverseNumber(0)) // Output: 0