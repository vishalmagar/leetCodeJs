const arr = [3,0,1,0,4,0,2];
const waterLogging = (arr) =>{
    let left = 0;
    let right = arr.length - 1;
    let leftMax = left;
    let rightMax = right;
    let totalWater = 0;

    while(left < right){
        if(arr[left] < arr[right]){
            // KEEP TRACK OF MAX LEFT AND MAX RIGHT
            if(arr[left] >= arr[leftMax]){
                leftMax = left;
            }else{
                // ADD WATER TO TOTAL WATER
                totalWater += arr[leftMax] - arr[left];
            }
            left++;
        }
        else{
            // KEEP TRACK OF MAX LEFT AND MAX RIGHT
            if(arr[right] >= arr[rightMax]){
                rightMax = right;
            }else{
                // ADD WATER TO TOTAL WATER
                totalWater += arr[rightMax] - arr[right];
            }
            right--;
        }

    }
    return totalWater;
}

const result = waterLogging(arr); // Output: 10
console.log(result);