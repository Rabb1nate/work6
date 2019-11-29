// 方法1：先平方
// let arr = [-5, -4, 0, 2, 3];
// // arr[Symbol.isConcatSpreadable] = false;
// console.log('原数组' + '[' + arr + ']');
// let i, z;
// let temp = 0;
// let newarr = arr.map((a) => {
//     return a * a;
// })
// console.log(newarr);
// for (i = 0; i < newarr.length; i++) {
//     for (z = 0; z < newarr.length - 1 - i; z++) {
//         temp = newarr[z];
//         if (newarr[z] > newarr[z + 1]) {
//             newarr[z] = newarr[z + 1];
//             newarr[z + 1] = temp;
//         }
//     }
//     console.log(newarr);
// }
// 方法2：先排序
let arr = [-5, -4, 0, 2, 3];
console.log('原数组' + '[' + arr + ']');
let i, z;
let temp = 0;
for (i = 0; i < arr.length; i++) {
    for (z = 0; z < arr.length - 1 - i; z++) {
        temp = arr[z];
        if (arr[z] * arr[z] > arr[z + 1] * arr[z + 1]) {
            arr[z] = arr[z + 1];
            arr[z + 1] = temp;
        }
    }
    console.log(arr);
}
let newarr = arr.map((a) => {
    return a * a;
})
console.log(newarr);