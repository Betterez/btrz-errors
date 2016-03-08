"use strict";

let maker = require("make-error-cause"),
  _ = require("lodash");

function pascalCase(code) {
  return _.upperFirst(_.camelCase(code))
}

class BtrzErrors {
  static create(code) {
    let BtrzError = maker(pascalCase(code));
    return new BtrzError(code, new Error("dsdsd"));
  }
}

exports.BtrzErrors = BtrzErrors;
