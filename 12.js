let count = 0;
let a = ["elite", "dangerous", "my", "wife", "left", "me"];
for (s of a) {
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == "e") count++;
    }
}
console.log(count) // 6