/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
  str = str.split("");

  const glasn = str.filter((buk) => "aeiouy".includes(buk));

  return glasn.length;
}

module.exports = getVowelsCount;
