const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
const lookup = input.reduce((m, k, i) => Object.assign(m, {
  [k]: output[i]
}), {});

module.exports = (str) => {
  return str.split('').map(x => lookup[x] || x).join('');
}
