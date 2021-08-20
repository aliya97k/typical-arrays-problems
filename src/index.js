exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
}
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
} else {
  return Math.max.apply(null, array);
}
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
} else {
  let array = array.reduce(function(a, b) { return a + b; }, 0);
  return array / array.length;
}
} 
