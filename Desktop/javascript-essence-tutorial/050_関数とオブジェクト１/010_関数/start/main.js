function fn(...args){
  console.log(args);
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
  return a;
}

let c = fn(0, undefined);
console.log(c);