// 输入
const obj = {
  a: {
    b: { c: "xx" },
    d: { e: "xx" },
    f: { g: { h: "xx" } },
    i: { j: { k: "xx" } },
  },
};

// 输出：
// result = [h, k, c, e, g, j, b, d, f, i, a];

function bfs(obj) {
  let res = [];
  let queue = [obj];
  while (queue.length) {
    res.push([]);
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const newObj = queue.shift();
      let key = Object.keys(newObj)[0];
      res[res.length - 1].push(key);
      if (typeof newObj[key] === "object") {
        for (let newKey in newObj[key]) {
          const inner = newObj[key][newKey];
          queue.push({ [newKey]: inner });
        }
      }
    }
  }
  let res2 = [];
  for (let i = res.length - 1; i >= 0; i--) {
    res2.push(...res[i]);
  }
  return res2;
}

console.log(bfs(obj));
