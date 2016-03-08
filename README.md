# btrz-errors

A library to create a series of common or custom errors

It wraps the `make-error-cause` library and offers some conventions on top of it.

### Usage

    let BtrzErrors = require("btrz-errors").BtrzErrors;

    let error = BtrzErrors.create("NEW_ERROR"); //Only a code, no message or causing error

    let knownError = BtrzErrors.create(err);
    // Giving just an error coming from another source will try to find a known error based on the
    // message of the given error and return that error or null

    let errorWithCause = BtrzErrors.create("WITH_CAUSE", err);
    // Will return an error of type WithCause that holds the err in the .cause === err

    let errorWithMessage = BtrzErrors.create("WITH_MESSAGE", "this is the message")
    // will return an error of type WithMessage with the .message === "this is the message"

    let complete = BtrzErrors.create("COMPLETE", err, "message");
    // will return an error of type "Complete"
    // .message === "message"
    // .name == "Complete"
    // .cause === err
    
