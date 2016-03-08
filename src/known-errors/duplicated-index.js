"use strict";

let maker = require("make-error-cause");

exports.DuplicatedIndex = function (err) {
  let DuplicatedIndex = maker("DuplicatedIndex");
  return new DuplicatedIndex(err);
};
