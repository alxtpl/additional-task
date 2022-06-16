console.log('---camelcasefor.js---');
// const input = `S;V;iPad
// C;M;mouse pad
// C;C;code swarm
// S;C;OrangeHighlighter`;
const input = `S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame`;

function processData(input) {
  //Enter your code here
  let newArr = [];
  let Arr = [];
  let Arr2 = [];
  let Arr3 = [];

  newLine = `${'\r\n' && '\n'}`; //!!!!!(use || or && depends fom your OS)
  semicolon = ';';
  emptyParentheses = '()';
  space = ' ';
  result = '';

  input.split(newLine).forEach(element => {
    newArr.push(element.split(semicolon));
  });
  //   console.log('==============');
  newArr.forEach(element => {
    element[2] = element[2]
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase()
      .replace(/[{()}]/g, '')
      .split(space);
  });

  newArr.forEach(element => {
    //---------------
    // console.log('element[0]', element[0], element[1]);
    switch (element[0] + element[1]) {
      case 'S' + 'M':
        console.log(element[2].join(space));

        break;
      case 'S' + 'V':
        console.log(element[2].join(space));
        break;
      case 'S' + 'C':
        console.log(element[2].join(space));
        break;
      case 'C' + 'M':
        element[2].forEach(item => {
          Arr.push(item[0].toUpperCase() + item.slice(1));
        });
        console.log(Arr[0].toLowerCase() + Arr.slice(1).join('') + '()');
        break;
      case 'C' + 'V':
        element[2].forEach(item => {
          Arr2.push(item[0].toUpperCase() + item.slice(1));
        });
        console.log(Arr2[0].toLowerCase() + Arr2.slice(1).join(''));
        break;
      case 'C' + 'C':
        element[2].forEach(item => {
          Arr3.push(item[0].toUpperCase() + item.slice(1));
        });
        console.log(Arr3.join(''));
        break;
    }
  });
  //   console.log(newArr);
  //   console.log(input);
}
processData(input);
