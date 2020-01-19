/* global describe, it, before */

import chai from 'chai';

require('../dist/main.js');
const datejs = window["tibetan-dates-js"].default;

chai.expect();

const expect = chai.expect;

let lib;

describe('For 1986', () => {
  describe('getting info', () => {
    it('should return {a: 11, e: 0, yir: 60, r: 16}', () => {
      expect(datejs.get_earyir(1986)).to.eql({a: 11, e: 0, yir: 60, r: 16});
    });
  });
});

describe('For 1987', () => {
  describe('getting info', () => {
    it('should return {a: 0, e: 0, yir: 1, r: 17}', () => {
      expect(datejs.get_earyir(1987)).to.eql({a: 0, e: 0, yir: 1, r: 17});
    });
  });
});

describe('For e=2, a=5', () => {
  describe('getting info', () => {
    it('should return []', () => {
      expect(datejs.get_y(2, 5)).to.eql([]);
    });
  });
});

describe('For e=1, a=8, r=17', () => {
  describe('getting year', () => {
    it('should return 2019', () => {
      expect(datejs.get_y(1, 8, 17)).to.equal(2019);
    });
  });
});