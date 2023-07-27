// 字符串类型（String）
// 表示一串字符，可以使用单引号或双引号括起来。

// 单引号字符串
let str: string = 'Hello, I am a single-quoted string.';
console.log(str, '单引号字符串');

// 双引号字符串
let str1: string = 'Hello, I am a double-quoted string.';
console.log(str1, '双引号字符串');

// 模板字符串
// 使用反引号（`）括起来，可以在字符串中插入变量或表达式。
let name1: string = 'Alice';
let age: number = 30;
let templateString: string = `Hello, my name is ${name1} and I am ${age} years old.`;
console.log(templateString, '模板字符串');
