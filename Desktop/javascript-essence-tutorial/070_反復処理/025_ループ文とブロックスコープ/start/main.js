for(let i = 0; i < 5; i++) {
  let j = i * 2;
  console.log(j);
  setTimeout(function() {
    console.log(i)
  }, 1000);
}