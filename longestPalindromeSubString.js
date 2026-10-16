const test = (s) =>{
    if(!s || !s.length) return '';
    let maxPalindromLength = '';
    let start = 0;
    const checkPalindrome = (left, right) => {
        while(left>=0 && right<s.length && s[left] === s[right]){
            const currentLength = right - left + 1;
            if(maxPalindromLength<=currentLength){
                maxPalindromLength = currentLength;
                start = left;
            }
            left--;
            right++;
        }
    };
    for(let i=0;i<s.length;i++){
        checkPalindrome(i, i);
        checkPalindrome(i, i+1);
    }
    return s.substring(start, start + maxPalindromLength);
}
const result = test("babad"); // Output: "bab" or "aba"
console.log(result);

const longestPalindromeBruteForce = (s) => {
    if(!s || !s.length) return '';
    let maxLength = 0;
    let start = 0;
    const isPalindrome = (left,right) => {
        if(s[left] !== s[right]) return false;
        while(left<right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(isPalindrome(i,j)){
                const currentLength = j - i + 1;
                if(currentLength >=maxLength){
                    maxLength = currentLength;
                    start = i;
                }
            }
        }
    }
    return s.substring(start, start + maxLength);
}

const resultBruteForce = longestPalindromeBruteForce("babad"); // Output: "bab" or "aba"
console.log(resultBruteForce);