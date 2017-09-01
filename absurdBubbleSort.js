const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const askIfGreaterThan = function askIfGreaterThan(el1, el2, cb) {
  reader.question(`Is ${el1} greater than ${el2}?`, function(answer) {
    (answer === "yes") ? cb(true) : cb(false);

  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], (answer) => {
      if (answer === true) {
        madeAnySwaps = true;
        [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
      innerBubbleSortLoop(arr, i+=1, madeAnySwaps, outerBubbleSortLoop);
    }
    else {
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, i+=1, madeAnySwaps, outerBubbleSortLoop);
    }
  });

  }

}

function absurdBubbleSort(arr, sortCompletionCB) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCB(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3,2,1], function (arr) {
  console.log("Sorted array: "+ JSON.stringify(arr));
  reader.close();
});
