'use strict';

function isError(err) {
  if (!err){
    return false;
  }
  if (typeof err !== 'object') {
    return false;
  }
  if (Object.prototype.toString.call(err) === "[object Error]"
      && Object.getPrototypeOf(err) == "Error"
     ) {
    return true;
  }
  // Catch all
  return false;
}

module.exports = isError;
