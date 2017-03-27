import { setGlobals } from './../src/number-extensions';
import chai from 'chai';

chai.should();
let expect = chai.expect;

setGlobals();

describe('Number Extensions', function () {
  describe('#setGlobals()', function () {
    it('should should add all functions to Number prototype', function () {
      (typeof Number.prototype.cycle).should.equal('function');
      (typeof Number.prototype.scale).should.equal('function');
      (typeof Number.prototype.random).should.equal('function');
      (typeof Number.prototype.floor).should.equal('function');
      (typeof Number.prototype.round).should.equal('function');
      (typeof Number.prototype.ceil).should.equal('function');
      (typeof Number.prototype.clamp).should.equal('function');
      (typeof Number.prototype.toRad).should.equal('function');
      (typeof Number.prototype.toDeg).should.equal('function');
      (typeof Number.prototype.abs).should.equal('function');
      (typeof Number.prototype.pow).should.equal('function');
      (typeof Number.prototype.sqrt).should.equal('function');
      (typeof Number.prototype.wholeCenter).should.equal('function');
      (typeof Number.prototype.loop).should.equal('function');
    });
  });

  describe('#cycle()', function () {
    it('should accept positive numbers', function () {
      1..cycle(+1, [0, 3]).should.equal(2);
    });

    it('should accept negative numbers', function () {
      1..cycle(-2, [0, 3]).should.equal(3);
    });

    it('should cycle with positive start index', function () {
      1..cycle(+3, [0, 3]).should.equal(0);
    });

    it('should cycle with negative start index', function () {
      1..cycle(+4, [-3, 3]).should.equal(-2);
    });

    it('should throw an error when passing non integer values', function () {
      expect(function () {
        1..cycle(+3.4, [-3, 3]);
      }).to.throw(Error);
    });
  });

  describe('#scale()', function () {
    it('should return 50% of 50 and 150', function () {
      .5.scale(50, 150).should.equal(100);
    });
  });

  describe('#random()', function () {
    it('should return a random number between 0 and 10', function () {
      var number = 10..random(50, 150);
      expect(number).to.be.above(0);
      expect(number).to.be.below(10);
    });
  });

  describe('#floor()', function () {
    it('should floor correctly', function () {
      3.5.floor().should.equal(3);
    });
  });

  describe('#round()', function () {
    it('should round correctly', function () {
      3.34.round().should.equal(3);
    });
  });

  describe('#ceil()', function () {
    it('should ceil correctly', function () {
      3.5.ceil().should.equal(4);
    });
  });

  describe('#clamp()', function () {
    it('should clamp at the floor', function () {
      5..clamp(10, 50).should.equal(10);
    });

    it('should clamp at the ceiling', function () {
      60..clamp(10, 50).should.equal(50);
    });

    it('should not change the number if it\'s in range', function () {
      30..clamp(10, 50).should.equal(30);
    });
  });

  describe('#toRad()', function () {
    it('should convert to radians', function () {
      90..toRad().should.equal(1.5707963267948966);
    });
  });

  describe('#toDeg()', function () {
    it('should convert to degrees', function () {
      1.5707963267948966.toDeg().should.equal(90);
    });
  });

  describe('#abs()', function () {
    it('should return absolute number', function () {
      -4.5.abs().should.equal(4.5);
    });
  });

  describe('#pow()', function () {
    it('should power correctly', function () {
      2..pow(3).should.equal(8);
    });
  });

  describe('#sqrt()', function () {
    it('should square root correctly', function () {
      16..sqrt().should.equal(4);
    });
  });

  describe('#wholeCenter()', function () {
    it('should return 2nd value from a 4 item range', function () {
      4..wholeCenter().should.equal(2);
    });

    it('should return center value from an odd number (using ceil) for 0 indexed arrays', function () {
      5..wholeCenter(true).should.equal(2);
    });

    it('should return center value from an odd number (using floor = default)', function () {
      5..wholeCenter().should.equal(3);
    });
  });

  describe('#loop()', function () {
    it('should return looped number', function () {
      400..loop(360).should.equal(40);
    });

    it('should return looped number (multiple loops)', function () {
      760..loop(360).should.equal(40);
    });
  });
});
