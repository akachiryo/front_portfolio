const wm = new WeakMap();

let o = {};
wm.set(o, 'value1')

// o = null;
console.log(wm.delete(o));
console.log(wm.get(o));