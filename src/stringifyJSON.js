// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return '' + obj;
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    obj = obj.map(function(item) {
      return stringifyJSON(item);
    });
    return '[' + obj + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join() + '}';
  }
};
