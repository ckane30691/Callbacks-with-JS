const readline = require('readline');
const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});


const addNumbers = function addNumbers (sum, numsLeft, completionCB) {

  if (numsLeft > 0) {
    reader.question("What's your number?", function(userNumber) {
      let parsedUserNum = parseInt(userNumber);
      sum += parsedUserNum;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCB);
    });
  } else {
    completionCB(sum);
  }

};


addNumbers(100, 5, sum => console.log(`Total Sum: ${sum}`));
