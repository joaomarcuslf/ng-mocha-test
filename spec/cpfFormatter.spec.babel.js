"use strict";

import chai from 'chai';
const expect = chai.expect;
const should = chai.should;
const assert = chai.assert;

import cpfFormatter from '../app/formatters/cpfFormatter.babel';

const cpf = new cpfFormatter();;

describe("cpf formatter", () => {

	describe("formating", () => {
		it("should return format cpf correctly", () => {
			let result = cpf.format('1111111111');
			let expectedResult = '111.111.111-11';

			expect(result).to.not.be.equal(expectedResult);
		});

		it("should return same cpf as input", () => {
			let result = cpf.format('11111111111');
			let expectedResult = '111.111.111-11';

			expect(result).to.equal(expectedResult);
		});

		it("should return a empty string if input is undefined", () => {
			let result = cpf.format(undefined);
			let expectedResult = '';

			expect(result).to.equal(expectedResult);
		});
	});

	describe("validating", () => {
		it("return true if input is valid", () => {
			let result = cpf.validate('11111111111');
			

			expect(result).to.be.true;
		});

		it("return false if input isn't valid", () => {
			let result = cpf.validate('1111111111');
			

			expect(result).to.be.false;
		});

		it("return false if input is undefined", () => {
			let result = cpf.validate(undefined);
			

			expect(result).to.be.false;
		});
	});
});