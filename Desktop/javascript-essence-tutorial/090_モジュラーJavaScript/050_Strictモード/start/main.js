// 'use strict'
a = 0;
console.log(a);

function fn(){
  // 'use strict'
  return this;
}

console.log(fn.call(2));