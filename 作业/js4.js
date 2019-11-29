let map = new Map();
let sum = 0;
map.set('CDD', 18);
map.set('cfs', 16);
map.set('zdjrfz B', 42);
map.forEach( (value) => {
    sum = sum + value;
});
// let newarr = map.Map( (value) => { sum = sum + value;})
// 不是数组
const promise = new Promise(() => {
    console.log(sum);
})