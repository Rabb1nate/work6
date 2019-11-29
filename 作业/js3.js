// 方法一：
// let arr = new Set([2, 3, 7, 5, 2, 6, 9, 7, 0]);
// // console.log(arr);
// // let i;
// // let temp = 0;
// let teemp = arr.values();
// // console.log(teemp);
// let temp = teemp.next().value;
// // console.log(temp);



// for (let i of arr) {
//     if (i >= temp) {
//         temp = i;
//         console.log(temp);
//     }
// }



// arr.delete(temp);
// // console.log(arr);
// // arr.add(9);
// let test = new Promise((success, file) => {
//     if (!arr.has(temp)) {
//         success();
//     } else {
//         file()
//     }
// })
// test.then(
//     () => {
//         console.log(temp + '已被成功删除！');
//     }, () => {
//         console.log('删除数据时出现错误！')

//     }

// )
// console.log(arr);


// 方法二：
let arr1 = [2, 3, 7, 5, 2, 6, 9, 7, 0];
let max = (arr)=>{
     return Math.max.apply(null,arr);

}
let a = max(arr1);
// console.log(a);
let arr = new Set(arr1);
console.log(arr);
arr.delete(a);
let test = new Promise((success, file) => {
    if (!arr.has(a)) {
        success();
    } else {
        file()
    }
})
test.then(
    () => {
        console.log(a + '已被成功删除！');
    }, () => {
        console.log('删除数据时出现错误！')

    }

)
console.log(arr);