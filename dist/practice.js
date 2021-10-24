'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };

var message = 'Hello World!';
console.log(message);
var count = 0; // 숫자
count += 1;
// count = '문자열 넣으면 에러난다';
/**
 * 변수에 타입 선언하기
 */
// 배열을 타입 선언하기
var numbers = [1, 2, 3, 4];
var messages = ['hi', 'hello'];
// 배열에 맞는 타입을 안넣으면 에러가 난다.
// numbers.push('문자열은 못넣는다.');
// ~일수도 있고 ~ 아닐 수도 있는 타입들
var mightBeUndefined = undefined;
var nullableNumber = null;
// 고정된 값만 들어가도록 하기
var color = 'red';
// color = 'pink'; // 에러 발생
/**
 * 함수에 타입 선언하기
 */
// 함수의 반환형식이 ():여기에 붙는다
function sum(x, y) {
  return x + y;
}
var Circle = /** @class */ (function () {
  // implements 키워드를 사용해 해당 클래스가
  // Shape interface의 조건을 충족하겠다는 것을 명시한다
  // radius: number;
  function Circle(radius) {
    this.radius = radius;
    this.radius = radius;
  }
  Circle.prototype.getArea = function () {
    return this.radius * this.radius * Math.PI;
  };
  return Circle;
})();
// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }
var person = {
  name: '안씨',
  age: 28,
};
// 상속받은 interface 사용하기
var expert = {
  name: '김개발',
  skills: ['javascript', 'react'],
};
/**
 * Generics 사용하기
 */
// 객체 A와 객체 B를 합쳐주는 merge라는 함수를 만든다고 가정
// A와 B가 어떤 것이 올지 모르기 때문에 any라는 타입을 쓴다
// 해당 경우 => 타입 유추가 모두 깨진거나 다름없다.
function merge(a, b) {
  return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
