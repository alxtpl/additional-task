console.log('---breakingtherecords.js---');
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function breakingRecords(scores) {
  // Write your code here
  //1)min arr, max arr
  //2)
  let max = scores[0];
  let min = scores[0];
  let res = [0, 0];

  scores.forEach(item => {
    if (item > max) {
      max = item;
      console.log('max', max);
      console.log('res[0]', res[0]);
      res[0] = res[0] + 1;
    }
    if (item < min) {
      min = item;
      console.log('min', min);
      console.log('res[1]', res[1]);
      res[1] = res[1] + 1;
    }
  });

  return console.log(res);
}
breakingRecords(scores);
