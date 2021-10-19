const handler = {
  get() {
    const res = Reflect.get(target, key, value, reciever)
    return res;
  },
  set(target, key, value, reciever) {
    const res = Reflect.set(target, key, value, reciever)
    trigger();
    return res;
  }
}
function reactive(target) {
  return new Proxy(target, handler);
}
let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
}
function trigger() {
  activeEffect();
}
export { effect, trigger };