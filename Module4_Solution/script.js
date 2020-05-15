(function (window) {


var names = ["Abhishek","Deva","Kunal","Aanvi","Sanvi","Anni","Anisha","Tony","Spider Man","Sheild"];


for (var i in names) {

  
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

 
  if (firstLetter == 'a') {
     window.helloSpeaker.speak(names[i]);
  } else {
     window.byeSpeaker.speak(names[i]);
  }
}
})(window);