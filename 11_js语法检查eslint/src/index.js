function add(x, y) {
  return x + y;
}
// 下一行eslint所有规则都失效（下一行不进行eslint检查）消除警告
// eslint-disable-next-line
console.log(add(1, 3));
