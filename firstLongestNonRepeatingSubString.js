const firstLongestNonRepeatingSubString = (str) => {
    let maxLength = 0;
    let start = 0;
    let longestSubstringStart = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end);
        if(end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstringStart = start;
        }
    }
    return {maxLength, substring: str.substring(longestSubstringStart, longestSubstringStart + maxLength)};
};

const firstLongestNonRepeatingSubStringBruteForce = (str) => {
    let maxLength = 0;
    let longestSubstring = "";

    for (let i = 0; i < str.length; i++) {
        let seenChars = new Set();
        let currentSubstring = "";
        for (let j = i; j < str.length; j++) {
            if (seenChars.has(str[j])) {
                break;
            }
            seenChars.add(str[j]);
            currentSubstring += str[j];
        }
        if (currentSubstring.length > maxLength) {
            maxLength = currentSubstring.length;
            longestSubstring = currentSubstring;
        }
    }
    return {maxLength, substring: longestSubstring};
};

const result = firstLongestNonRepeatingSubString("abcabcbb"); // Output: {maxLength: 3, substring: "abc"}
console.log(result);

const resultBruteForce = firstLongestNonRepeatingSubStringBruteForce("abcabcbb"); // Output: {maxLength: 3, substring: "abc"}
console.log(resultBruteForce);
