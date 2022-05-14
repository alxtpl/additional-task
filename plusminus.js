arr=[-4, 3, -9, 0, 4, 1]

console.log(parseFloat(arr.filter(item=>item>0).length/arr.length).toFixed(6))
console.log(parseFloat(arr.filter(item=>item<0).length/arr.length).toFixed(6))
console.log(parseFloat(arr.filter(item=>item==0).length/arr.length).toFixed(6))
