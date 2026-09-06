let counter = 0;
function count() {
  counter++;
  postMessage(counter);
  setTimeout(count, 1000);
}
count();