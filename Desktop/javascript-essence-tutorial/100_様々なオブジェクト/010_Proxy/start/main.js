const targetObj = { a: 0 };
const handler = {
  set: function(target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error('cannot ')
  },
  get: function (target, prop, receiver) {
    if(target.hasOwnProperty(prop)){
      return target 
    }
    console.log(`[get]: ${prop}`);
    return target[prop];
}
}
const pxy = new Proxy(targetObj, handler)
console.log('pxy.b');
pxy.a = 1;