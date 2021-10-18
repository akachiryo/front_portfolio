const arry = [1, 2, 3, 4, 5];

arry.forEach(function(v, i, a) {
  console.log(v);
});

const newarry = arry.map(function(v, i, a) {
  console.log(v);
  return v * 2;
});

// console.log(arry, newarry);

const fillterarry = arry.filter(function (v, i, a) {
  console.log(v);
  return i <=1;
})

console.log(fillterarry);