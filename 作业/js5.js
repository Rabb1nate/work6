// 方法一：
// let myPow = (x, n) => {
//     let i, sum = 1;
//     if (n === 0) {
//         sum = 1;
//     }
//     if (n < 0) {
//         n = -n;
//         for (i = 1; i <= n; i++) {
//             sum = sum * (1 / x);
//         }

//     } else {
//         for (i = 1; i <= n; i++) {
//             if (n >= 1) {
//                 sum = sum * x
//                     // console.log(sum);
//             }

//         }
//     }
//     return sum;
// };
// let result1 = myPow(2, 10);
// console.log(result1);
// console.log(myPow(2, -2));



// 方法二：
let myPow = (x,n) =>{
    return Math.pow(x,n);
}
let result1 = myPow(2, 10);
console.log(result1);
console.log(myPow(2, -2));
