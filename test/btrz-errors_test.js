"use strict"

describe("BtrzErrors", function () {

  let expect = require("chai").expect,
    BtrzErrors =  require("../index").BtrzErrors;

  describe("#create", function () {

    it("should return a custom error with the given code", function () {
      let code = "NEW_ERROR",
        error = BtrzErrors.create(code);

      expect(error.name).to.be.eql("NewError");
    });
  });

});
