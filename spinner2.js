const logo = ['|', '/', '-', '\\'];
let time = 100;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < logo.length; j++) {
    setTimeout(() => {
      process.stdout.write(`\r${logo[j]}   `);
    }, time);
    time += 200;
  }
}