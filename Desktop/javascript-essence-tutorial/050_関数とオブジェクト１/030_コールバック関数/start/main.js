function hello(name) {
  console.log('hello' + name);
}

function bye(){
  console.log('bye');
}

function fn(cd) {
  cd('Tom');
}

fn(hello);
fn(bye);

setTimeout(hello, 2000);