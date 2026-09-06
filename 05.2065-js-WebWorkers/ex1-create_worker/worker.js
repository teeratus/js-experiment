onmessage = function(e) {
  let result = e.data * 2;
  postMessage("Result: " + result);
};