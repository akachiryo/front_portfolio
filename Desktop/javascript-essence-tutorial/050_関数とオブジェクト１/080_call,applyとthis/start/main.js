function a(name, name1) {
    console.log('hello ' + name + '' + name1);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Johgn']);
a.call(tim, 'Tim');

const array = [1,2,3,4,5];
const r = Math.max.apply(null, array);
const rre = Math.max(...array);

console.log(rre);

