(function (window) {

var byeSpeaker = {};


var Word = "Good Bye";


byeSpeaker.speak = function (name) {
  console.log(Word + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);