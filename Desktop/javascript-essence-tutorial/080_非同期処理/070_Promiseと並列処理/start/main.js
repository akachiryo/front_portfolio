function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(date){
  console.log(date);
})
// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
