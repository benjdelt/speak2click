window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

let finalTranscript = '';

let recognition = new window.SpeechRecognition();
recognition.lang = 'en-US';
recognition.maxAlternatives = 10;
recognition.continuous = true;

recognition.onresult = (event) => {
  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += transcript;
    }
  }
  document.querySelector('.output').innerHTML = finalTranscript;

  // Get all the links and click on the one that matches the recognition result

  const links = document.querySelectorAll('a');
  console.log(links);
  for (let i = 0; i < links.length; i++) {
    if (links[i].innerText.toLowerCase() === finalTranscript.toLowerCase()) {
      links[i].click();
    }
  } 
}

window.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'l') {
    finalTranscript = '';
    recognition.start();
    console.log("Listening...")
  }
})

// Event Listeners for debugging

// recognition.onstart = function() {
//   console.log("start")
// }

// recognition.onaudiostart = function() {
//   console.log("audiostart")
// }

// recognition.onsoundstart = function() {
//   console.log("soundstart")
// }

// recognition.onspeechstart = function() {
//   console.log("speechstart")
// }

// recognition.onspeechend = function() {
//   console.log("speechend")
// }

// recognition.onsoundend = function() {
//   // recognition.stop();
//   console.log("soundend")
// }

// recognition.onaudioend = function() {
//   console.log("audioend")
// }

// recognition.onend = function() {
//   console.log("end")
// }
