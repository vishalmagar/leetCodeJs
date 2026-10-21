const transform = (str) => {
    let cleanNumStr = str.trim()
    let num = cleanNumStr.split(/[A-Z,a-z]/)[0]
    num = parseInt(num) || 0
    return num
}

console.log(transform("  42  ")) // Output: 42
console.log(transform("  -42  ")) // Output: -42
console.log(transform("4193 with words")) // Output: 4193
console.log(transform("words and 987")) // Output: 0
console.log(transform("-91283472332")) // Output: -91283472332
console.log(transform("314w159")) // Output: 314