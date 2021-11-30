const sentence = "hello there from lighthouse labs";

let count = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + count);
  count += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1000 + count);
