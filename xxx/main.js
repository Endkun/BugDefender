// main.js
// math.jsから関数と定数をインポート
import { add, subtract, multiply, divide, PI } from './math.js';
console.log(add(5, 3));      // 出力: 8
console.log(subtract(5, 3)); // 出力: 2
console.log(multiply(5, 3)); // 出力: 15
console.log(divide(10, 2));   // 出力: 5
console.log(divide(10, 0));   // 出力: 割る数に0は指定できません
console.log(PI);             // 出力: 3.14159265359