const obj = { a: 0 };
const json = JSON.stringify(obj);
localStorage.setItem('key', 'value');
localStorage.setItem('key2', 'value2');
localStorage.setItem('key3', json);
const result = localStorage.getItem('key');
console.log(result);
