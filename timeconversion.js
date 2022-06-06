console.log('=======================timeconversion.js========================');
// const s = '07:05:45PM';
// const s = '12:40:22AM';
const s = '12:45:54PM';
// Expected Output 19:05:45//
function timeConversion(s) {
  // Write your code here
  let t = null;
  if (s.includes('AM')) {
    t = s.length - 2;
    let a = s.slice(0, t);
    let b = a.split(':');
    let c = Number(b[0]);
    if (c === 12) {
      b[0] = '00';
    }
    return b.join(':');
  }
  if (s.includes('PM')) {
    t = s.length - 2;
    let a = s.slice(0, t);
    let b = a.split(':');
    let c = Number(b[0]) + 12;
    if (c === 24) {
      c = c - 12;
    }
    b[0] = c;
    let d = b.join(':');
    console.log(d);
    return d;
  }
}

timeConversion(s);
