const input = [19,10,3,7,9,8,5,2,1,17,16,14,12,18,6,13,11,20,4,5]
const snailTrail = (arr,rows,cols) =>{
  if(!rows || arr.length<rows || cols===1) return arr;
  const result = Array.from({length:rows},()=>Array(cols).fill(0))
  let isGoingDown = true;
  let col=0;
  for(let i=0;i<arr.length;i++){
    const row = isGoingDown ? i%rows : rows-1-(i%rows);
    result[row][col] = arr[i];
    if(row===rows-1 && isGoingDown){
      col++;
      isGoingDown=false;
    }
    if(row===0 && !isGoingDown){
      col++;
      isGoingDown=true;
    }
  }
  return result;
}

const result = snailTrail(input,5,4)
console.log(result)