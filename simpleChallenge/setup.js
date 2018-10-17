var counter = 0;
var timeleft = 1 * 5;

function convertSeconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  if (sec == 0) {}
  return min + ':' + sec;
}

function updateSelector(idSelector, message) {
  document.getElementById(idSelector).innerHTML = message;
}

function setup(idSelector) {

  updateSelector(idSelector, convertSeconds(timeleft - counter))

  function timeIt() {
    counter++;
    if (counter > timeleft) {
      updateSelector(idSelector, " Time Over")
      // TODO: Clear interval  .
      stopTimer(xTimer);
      // alert('Time Over,Stop Pls .')
      return;
    }
    // document.getElementById(idSelector).innerHTML = (convertSeconds(timeleft - counter));
    updateSelector(idSelector, convertSeconds(timeleft - counter))
  }
  var xTimer = setInterval(timeIt, 1000);
  // myTimer(timeIt);
  console.log("Hi there ");
}

// claer timer .
function stopTimer(xTime) {
  clearInterval(xTime);
}
