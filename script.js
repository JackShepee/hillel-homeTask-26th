const regex = /^-?[1-9][0-9]{5}$/;

console.log(regex.test("123456"));
console.log(regex.test("-123456"));
console.log(regex.test("-12345"));
console.log(regex.test("023456"));
console.log(regex.test("-000016"));
console.log(regex.test("100000"));
console.log(regex.test("-999999"));
console.log(regex.test("000001"));
console.log(regex.test("-000001"));
console.log(regex.test("1123456"));
console.log(regex.test("-1123456"));
console.log(regex.test("9a3456"));
console.log(regex.test("12345 "));
console.log(regex.test(" 123456"));
