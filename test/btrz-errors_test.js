"use strict"

describe("BtrzErrors", function () {

  let expect = require("chai").expect,
    BtrzErrors =  require("../index").BtrzErrors;

  describe("#create (known errors)", function () {

    it("should return a DuplicateKey error", function () {
      let duplicateError = new Error("... E11000 duplicate key error index ..."),
        error = BtrzErrors.create(duplicateError);
      expect(error.name).to.be.eql("DuplicatedIndex");
    });

    it("should return an unknown error", function () {
      let nonDuplicated = new Error("some error"),
        error = BtrzErrors.create(nonDuplicated);

      expect(error).to.be.undefined;
    });
  });

  describe("#create (adhoc errord)", function () {

    it("should return a custom error of the given type", function () {
      let code = "NEW_ERROR",
        error = BtrzErrors.create(code);

      expect(error.name).to.be.eql("NewError");
    });

    it("should return a custom error with the cause", function () {
      let code = "WITH_CAUSE",
        cause = new Error("this is the cause of the error"),
        error = BtrzErrors.create(code, cause);

      expect(error.name).to.be.eql("WithCause");
      expect(error.cause).to.be.eql(cause);
      expect(error.cause.message).to.be.eql(cause.message);
    });

    it("should have no message", function () {
      let code = "TO_STRING",
        cause = new Error("this is the cause of the to_string error"),
        error = BtrzErrors.create(code, cause);

      expect(error.message).to.be.eql("");
    });

    it("should have the given message", function () {
      let code = "TO_STRING",
        cause = new Error("this is the cause of the to_string error"),
        theGivenMessage = "The given message",
        error = BtrzErrors.create(code, cause, theGivenMessage);

      expect(error.message).to.be.eql(theGivenMessage);
    });

    it("should have the given message", function () {
      let code = "TO_STRING",
        cause = new Error("this is the cause of the to_string error"),
        theGivenMessage = "The given message",
        error = BtrzErrors.create(code, cause, theGivenMessage);

      expect(error.message).to.be.eql(theGivenMessage);
    });

    it("should throw if no codeOrError is given", function () {
      function sut() {
        BtrzErrors.create();
      }
      expect(sut).to.throw("codeOrError is mandatory");
    });

    it("should throw if codeOrError is not a string", function () {
      function sut() {
        BtrzErrors.create({name: "something here"});
      }
      expect(sut).to.throw("codeOrError is mandatory");
    });

    it("should create an error without cause but with a message", function () {
      let code = "TO_STRING",
        theGivenMessage = "The given message",
        error = BtrzErrors.create(code, theGivenMessage);

      expect(error.message).to.be.eql(theGivenMessage);
    });
  });
});
