console.log('--- loading: display lastResult');

function displayLastResultHandler() {
  'use strict';
  debugger;
  console.log('-- action: display lastResult');
  console.log('lastResult:', typeof lastResult, '\n', lastResult);

  const displayResult = document.getElementById('message');
  displayResult.innerHTML = `${lastResult}`;

}
