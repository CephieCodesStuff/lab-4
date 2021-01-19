let min = 0;
let max = 20;
let step = 3;
let x = "Диапозон от " + min + " до " + max + "\nШаг " + step;

for (let i = 0; i <= max; i += step) {
    x = x + "\n" + i + " " + (Math.pow(i,2) + Math.pow(i, 3) - (3*i));
}

console.log(x);

