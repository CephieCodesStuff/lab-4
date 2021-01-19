const n = 5;
const a = [];
const min = 0;
const max = 64;

for (let i = 0; i < n; i++) {
    a.push(Math.round(Math.random() * (min-max) + min));
}

console.log(a.reduce((a, x) => a + x * x, 0));