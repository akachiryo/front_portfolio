function hello(name = "Tom") {
  // name = name || 'Tom'
  console.log('hello ' + name);
}

let name = 'Bob';

name && hello(name);
name || hello();