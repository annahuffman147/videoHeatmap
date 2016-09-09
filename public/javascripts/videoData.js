"use strict";
//

// <iframe width="560" height="315" src="https://www.youtube.com/embed/OWG3rtGoIlI" frameborder="0" allowfullscreen></iframe> surfingbabies 1:35
// <iframe width="560" height="315" src="https://www.youtube.com/embed/GpMchwEYHms" frameborder="0" allowfullscreen></iframe> babymeEvian 1:16
// <iframe width="560" height="315" src="https://www.youtube.com/embed/XQcVllWpwGs" frameborder="0" allowfullscreen></iframe>rollerbabiesEvian 1:01


var myVideo = document.getElementById("video");
var source = document.getElementById('source');

console.log(typeof myVideo.currentSrc);

console.log(myVideo.currentSrc);

function loadRollerBabies () {
  source.setAttribute("src", 'videos/rollerbabiesEvian.mp4')
  console.log(myVideo);
  myVideo.load()
  return
}

function loadBabyMe () {
  source.setAttribute("src", 'videos/babymeEvian.mp4')
  console.log(myVideo);
  myVideo.load()
  return
}

function loadSurfingBaby () {
  source.setAttribute("src", 'videos/babybayEvian.mp4')
  console.log(myVideo);
  myVideo.load()
  return
}
