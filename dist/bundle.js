/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable guard-for-in */
/* eslint-disable no-sequences */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* eslint-disable eol-last */
// eslint-disable-next-line no-unused-expressions, no-nested-ternary
!(function (e, t) { typeof exports === 'object' && typeof module === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define([], t) : typeof exports === 'object' ? exports['word-to-binary'] = t() : e['word-to-binary'] = t(); }(this, (() => (() => {
  // eslint-disable-next-line no-unused-expressions, no-var, no-restricted-syntax
  var e = { d: (t, o) => { for (const r in o)e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: o[r] }); }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: (e) => { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); } }; const t = {}; e.r(t), e.d(t, { wordToBinary: () => n }); const o = { a: '01100001', b: '01100010', c: '01100011', d: '01100100', e: '01100101', f: '01100110', g: '01100111', h: '01101000', i: '01101001', j: '01101010', k: '01101011', l: '01101100', m: '01101101', n: '01101110', o: '01101111', p: '01110000', q: '01110001', r: '01110010', s: '01110011', t: '01110100', u: '01110101', v: '01110110', w: '01110111', x: '01111000', y: '01111001', z: '01111010' }; function r(e) { if (e === ' ') return ' '; const t = e.toLowerCase(); return o[t] ? o[t] : e.charCodeAt(0).toString(2).padStart(8, '0') + ' ('.concat(e, ' not in mapping)'); } function n(e) { return e.split('').map(r).join(' '); } return t;
})())));