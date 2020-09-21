const spinner = ['|', '/', '-', '\\'];
let t = 100;
for(let i = 0; i < 25; i++){
  for (let a of spinner) {
    setTimeout(() => process.stdout.write(`\r${a}   `), t);
    t += 200;
  }
}
