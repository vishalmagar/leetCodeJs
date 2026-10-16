const getZizZagString = (s, numRows) => {
  if (numRows === 1 || s.length <= numRows) return s;
  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = true;
  for(let i=0;i<s.length;i++){
    rows[currentRow] += s[i];
    currentRow += goingDown ? 1 : -1;
    if(currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
  }
  return rows.join("");
}
const result = getZizZagString("PAYPALISHIRING", 3); // Output: "PAHNAPLSIIGYIR"
console.log(result);

