// Worker with timer
onmessage = function(e) {
  let count = 0;
  let intervalId = setInterval(function() {
    count++;
    postMessage("Timer tick: " + count);
    if (count >= 5) {
      clearInterval(intervalId);
      postMessage("Timer complete!");
    }
  }, 1000);
};