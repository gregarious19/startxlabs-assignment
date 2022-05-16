// QUESTION 1

const convert = function (seconds) {
  const hour = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds - hour * 3600) / 60);
  seconds = seconds - hour * 3600 - minutes * 60;
  const answer = [hour, minutes, seconds];
  return answer;
};

const seconds = prompt();
a = convert(Number(seconds));
console.log(`Hours=${a[0]},Minutes=${a[1]},Seconds=${a[2]}`);

// QUESTION 2
const n = prompt();

const l = [];

const findxOR = function (n) {
  let mod = n % 4;

  if (mod == 0) return n;
  else if (mod == 1) return 1;
  else if (mod == 2) return n + 1;
  else if (mod == 3) return 0;
};

const findXOR = function (l, r) {
  return findxOR(l - 1) ^ findxOR(r);
};

for (let i = 0; i < n; i++) {
  let num = prompt().split(" ");
  l.push(findXOR(num[0], num[1]));
}

for (let i = 0; i < n; i++) {
  console.log(l[i] % 2 === 0 ? "EVEN" : "ODD");
}

// QUESTION 3
const nu = Number(prompt());
const s = [];
for (let i = 0; i < nu; i += 1) {
  s.push(prompt());
}
s.sort();
for (let i = 0; i < nu; i += 1) {
  console.log(s[i]);
}
