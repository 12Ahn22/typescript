const message: string = 'Hello World!';
console.log(message);

let count = 0; // 숫자
count += 1;
// count = '문자열 넣으면 에러난다';

/**
 * 변수에 타입 선언하기
 */

// 배열을 타입 선언하기
const numbers: number[] = [1, 2, 3, 4];
const messages: string[] = ['hi', 'hello'];

// 배열에 맞는 타입을 안넣으면 에러가 난다.
// numbers.push('문자열은 못넣는다.');

// ~일수도 있고 ~ 아닐 수도 있는 타입들
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

// 고정된 값만 들어가도록 하기
let color: 'red' | 'blue' | 'green' = 'red';
// color = 'pink'; // 에러 발생

/**
 * 함수에 타입 선언하기
 */
// 함수의 반환형식이 ():여기에 붙는다
function sum(x: number, y: number): number {
  return x + y;
}

/**
 * interface 사용하기
 */

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  // implements 키워드를 사용해 해당 클래스가
  // Shape interface의 조건을 충족하겠다는 것을 명시한다

  // radius: number;

  constructor(private radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

/**
 * 일반 객체도 interface로 타입 설정이 가능하다
 */
interface Person {
  name: string;
  age?: number; // 물음표는 있어도 되고 없어도 되고를 의미한다.
}
// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

const person: Person = {
  name: '안씨',
  age: 28,
};

/**
 * extends로 상속하기
 */

interface Developer extends Person {
  // age와 name은 상속을 받는다.
  skills: string[];
}
// 상속받은 interface 사용하기
const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react'],
};

/**
 * Type Alias 사용하기
 */
// &는 Intersection으로 두개 이상의 타입들을 합쳐준다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Dev = Person & {
  skills: string[];
};
// Person[]을 People이라는 타입으로 사용할 수 있다.
type People = Person[];

/**
 * Generics 사용하기
 */

// 객체 A와 객체 B를 합쳐주는 merge라는 함수를 만든다고 가정
// A와 B가 어떤 것이 올지 모르기 때문에 any라는 타입을 쓴다
// 해당 경우 => 타입 유추가 모두 깨진거나 다름없다.
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });
// 이런 상황에서  Generics를 사용한다.

function merge2<A, B>(a: A, b: B): A & B {
  // &는 합치기
  return {
    ...a,
    ...b,
  };
}
const merged2 = merge2({ foo: 1 }, { bar: 1 });

function getText<T>(text: T): T {
  return text;
}
getText<string>('hi');
getText<number>(10);

/**
 * interface 에서 Generic 사용하기
 */

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

/**
 * type에서 Generic 사용하기
 */
type Items2<T> = {
  list: T[];
};

const items2: Items2<string> = {
  list: ['a', 'b', 'c'],
};

/**
 * 클래스에서 Generic 사용하기
 */
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
