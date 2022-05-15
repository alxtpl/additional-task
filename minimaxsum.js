arr=[1,2,3,4,5]
// arr=[5,4,3,2,1]
// arr=[5,5,5,5,5]
//10 14
let acc=[]
for(let i=0;i<arr.length;i++){
    acc.push(arr
        .filter((_,index)=>i!=index)
        .reduce(function(sum, elem) {
        return sum + elem;
    }, 0))
}
console.log(Math.min.apply(null,acc),Math.max.apply(null,acc));
// ------------------------------------
// for(let i=1;i<arr.length+1;i++){
//         acc=arr.filter((item,index,aray)=>index!=i)
//         console.log(acc);
//     }
