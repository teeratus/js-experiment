onmessage = function(e) {
  postMessage("Worker received: " + e.data);
};