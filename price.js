// let prices = [250, 645, 300, 900, 50];

// for (let i = 0; i < prices.length; i++) {
//   prices[i] = prices[i] - (prices[i] * 0.1);
// }

// console.log(prices)

javascript
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  return count;
}