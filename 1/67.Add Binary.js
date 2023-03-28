// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

// 错误原因：浮点数最大值为2的32次方-1
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length === 0) {
    return b;
  }

  if (b.length === 0) {
    return a;
  }
  let result = parseInt(a, 2) + parseInt(b, 2);
  return result.toString(2);
};

// beat 25.33%的
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = [],
    aPos = a.length - 1,
    bPos = b.length - 1,
    surplus = 0;
  while (aPos >= 0 && bPos >= 0) {
    let c = Number(a[aPos]) + Number(b[bPos]) + surplus;
    surplus = Math.floor(c / 2);
    result.push(c % 2 + '');
    aPos--;
    bPos--;
  }
  while (aPos >= 0) {
    if (surplus === 0) {
      result.push(a[aPos] + '');
    } else {
      if (a[aPos] === '1') {
        surplus = 1;
        result.push('0');
      } else {
        surplus = 0;
        result.push('1');
      }
    }
    aPos--;
  }
  while (bPos >= 0) {
    if (surplus === 0) {
      result.push(b[bPos] + '');
    } else {
      if (b[bPos] === '1') {
        surplus = 1;
        result.push('0');
      } else {
        surplus = 0;
        result.push('1');
      }
    }
    bPos--;
  }
  if (surplus === 1) {
    result.push('1')
  }
  return result.reverse().join('');
};

// 结合上面两种方法
// beat 45.83%
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return a.length > 30 || b.length > 30 ? addBinary1(a, b) : addBinary2(a, b);

  function addBinary2(a, b) {
    if (a.length === 0) {
      return b;
    }

    if (b.length === 0) {
      return a;
    }
    let result = parseInt(a, 2) + parseInt(b, 2);
    return result.toString(2);
  };

  function addBinary1(a, b) {
    let result = [],
      aPos = a.length - 1,
      bPos = b.length - 1,
      surplus = 0;
    while (aPos >= 0 && bPos >= 0) {
      let c = Number(a[aPos]) + Number(b[bPos]) + surplus;
      surplus = Math.floor(c / 2);
      result.push(c % 2 + '');
      aPos--;
      bPos--;
    }
    while (aPos >= 0) {
      if (surplus === 0) {
        result.push(a[aPos] + '');
      } else {
        if (a[aPos] === '1') {
          surplus = 1;
          result.push('0');
        } else {
          surplus = 0;
          result.push('1');
        }
      }
      aPos--;
    }
    while (bPos >= 0) {
      if (surplus === 0) {
        result.push(b[bPos] + '');
      } else {
        if (b[bPos] === '1') {
          surplus = 1;
          result.push('0');
        } else {
          surplus = 0;
          result.push('1');
        }
      }
      bPos--;
    }
    if (surplus === 1) {
      result.push('1')
    }
    return result.reverse().join('');
  };
};


// beat 82.67%;
  /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = '',
      aPos = a.length - 1,
      bPos = b.length - 1,
      surplus = 0;
  while(aPos>=0 || bPos>=0 || surplus > 0){
      let x = aPos >= 0 ? a[aPos--] - '0' : 0;
      let y = bPos>=0 ? b[bPos--] - '0' : 0;
      let c = x + y + surplus;
      surplus = Math.floor(c/2) ;
      result = ( c % 2 + '' ) + result;
  }
  return result;
};

// beat 62.22%   什么鬼？
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = '',
      aPos = a.length - 1,
      bPos = b.length - 1,
      surplus = 0;
  while(aPos>=0 || bPos>=0){
      let x = aPos >= 0 ? a[aPos--] - '0' : 0;
      let y = bPos>=0 ? b[bPos--] - '0' : 0;
      let c = x + y + surplus;
      surplus = Math.floor(c/2) ;
      result = ( c % 2 + '' ) + result;
  }
  return surplus === 1 ? '1' + result: result;
};