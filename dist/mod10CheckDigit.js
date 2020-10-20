(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mod10CheckDigit = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

/**
 * Calculate check digit
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param {Number|String} numbers
 */
module.exports = function mod10CheckDigit (numbers) {
  if (typeof numbers !== 'string') {
    throw new Error('Invalid number provided')
  }

  const doubledSum = numbers.split('')
    .map(function (val, index) {
      if ((index + numbers.length) % 2 !== 0) {
        const double = Number.parseInt(val) * 2
        return double > 9 ? double - 9 : double
      }

      return val
    })
    .reduce(function (acc, curr) { Number.parseInt(acc) + Number.parseInt(curr) })

  return (doubledSum * 9) % 10
}

},{}]},{},[1])(1)
});
