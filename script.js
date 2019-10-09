window.SpeechRecognition = window.webkitSpeechRecognition || 
window.SpeechRecognition;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  // Extension starts on page load
  if (changeInfo.status == 'complete' && tab.active) {
    // Event listener on command set in manifest.json
    chrome.commands.onCommand.addListener(function (command) {
      if (command === "start-speech") {
        var recognition = new SpeechRecognition();
        recognition.start();
        alert("Started");
        recognition.continuous = true;
        setTimeout(function() {
          recognition.stop();
          alert("Stopped");
        }, 5000)
        recognition.onresult = function(event) {
          alert("Result: " + event.results[0][0].transcript)
        }
      }
  });
  }
})
