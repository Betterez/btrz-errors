"use strict";

let maker = require("make-error-cause");

function pascalCase(code) {
  return code
    .split("_")
    .map((p) => { return p.toLowerCase(); })
    .map((p) => { return `${p[0].toUpperCase()}${p.slice(1)}`; })
    .join("");
}

function isString(value) {
  return value && value.toLowerCase;
}

class BtrzErrors {
  static create(codeOrError, causeOrMessage, message) {

    if (!isString(codeOrError)) {
      throw new Error("codeOrError is mandatory");
    }

    let BtrzError = maker(pascalCase(codeOrError));
    if (causeOrMessage && isString(causeOrMessage)) {
      return new BtrzError(causeOrMessage);
    } else {
      return new BtrzError(message, causeOrMessage);
    }
  }
}

exports.BtrzErrors = BtrzErrors;
