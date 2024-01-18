//Checking sun zero 
//[-5,-4,-3,-3,0,2,4,6,8]

let arr = [-5, -4, -3, -3, 0, 2, 4, 6, 8]
function SumZero(arr) {
    for (const num of arr) {
        for (let j = 1; j < arr.length; j++) {
            if(num + arr[j] === 0){
                return[num, arr[j]];
            }
        }
    }

}
const result = SumZero(arr);
console.log(result);