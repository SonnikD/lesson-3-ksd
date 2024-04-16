/*
Вы реализуете один раз функцию,
которая принимает другую функцию в качестве аргумента и возвращает новую версию этой функции,
которую можно вызвать только один раз.

Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать неопределенное значение).

Например:

logOnce = один раз(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> нет эффекта
*/
function once(func) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = func(...args);
      return result;
    }
    return undefined;
  };
}

module.exports = once;
