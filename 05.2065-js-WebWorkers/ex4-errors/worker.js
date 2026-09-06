// This worker intentionally produces an error
onmessage = function(e) {
  // ReferenceError - variable does not exist
  postMessage(nonExistentVariable);
};