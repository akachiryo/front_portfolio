const arry = [1, 2, 3, 4, 5];

const result = arry.reduce(function(accu, curr) {
  console.log(accu);
  console.log(curr);
    return accu + curr;
});

console.log(result);