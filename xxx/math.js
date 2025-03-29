// math.js
// 足し算を行う関数
export function add(a, b) {
  return a + b;
}
// 引き算を行う関数
export function subtract(a, b) {
  return a - b;
}
// 掛け算を行う関数
export function multiply(a, b) {
  return a * b;
}
// 割り算を行う関数
export function divide(a, b) {
  if (b === 0) {
    return "割る数に0は指定できません";
  }
  return a / b;
}
// 円周率
export const PI = 3.14159265359;