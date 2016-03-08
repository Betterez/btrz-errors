"use strict";

class KnownErrors {
  static create(error) {
     if (error.message.indexOf("E11000 duplicate key error index") !== -1) {
       return require("./duplicated-index").DuplicatedIndex(error);
     }
     return;
  }
}

exports.KnownErrors = KnownErrors;
