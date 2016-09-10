'use strict';

var myVideo = document.getElementById('video');
var source = document.getElementById('source');
var activityLog = document.getElementById('log');
var activityLogArray = [];

function playVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var playLog = 'Time: ' + time + '   Video Played' + '<br>';
  myVideo.play();
  activityLogArray.unshift(playLog);
  activityLog.innerHTML+= playLog;
  document.getElementById('ballTurtleRabbit').className = 'ball fa fa-spin fa-fw';
}

function pauseVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var pauseLog = 'Time: ' + time + '   Video Paused' + '<br>';
  myVideo.pause();
  activityLogArray.unshift(pauseLog);
  activityLog.innerHTML+= pauseLog;
  document.getElementById('ballTurtleRabbit').className = 'ball fa fa-fw';
}

function advanceVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var newTime = (myVideo.currentTime += 10.00).toFixed(2);
  var advanceLog = 'Time: ' + time + '   Video Advanced to ' + (newTime) + '<br>';
  activityLogArray.unshift(advanceLog);
  activityLog.innerHTML+= advanceLog;
}

function rewindVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var newTime = (myVideo.currentTime -= 10.00).toFixed(2);
  var rewindLog = 'Time: ' + time + '   Video Rewind to ' + newTime + '<br>';
  activityLogArray.unshift(rewindLog);
  activityLog.innerHTML+= rewindLog;
}

function fasterVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var rate = myVideo.playbackRate.toFixed(1);
  var newRate = (myVideo.playbackRate += 0.1).toFixed(1);
  var fasterLog = 'Time: ' + time + '   increase rate from ' + rate + ' to ' + (newRate) + '<br>';
  activityLogArray.unshift(fasterLog);
  activityLog.innerHTML+= fasterLog;
  if (newRate > 1.0) {
    document.getElementById('ballTurtleRabbit').src ='images/rabbit.png';
  } else if (newRate < 1.0) {
    document.getElementById('ballTurtleRabbit').src ='images/turtle.png';
  } else {
    document.getElementById('ballTurtleRabbit').src ='images/ball.png';
  }
}

function slowerVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var rate = myVideo.playbackRate.toFixed(1);
  var newRate = (myVideo.playbackRate -= 0.1).toFixed(1);
  var slowerLog = 'Time: ' + time + '   increase rate from ' + rate + ' to ' + (newRate) + '<br>';
  activityLogArray.unshift(slowerLog);
  activityLog.innerHTML+= slowerLog;
  if (newRate > 1.0) {
    document.getElementById('ballTurtleRabbit').src ='images/rabbit.png';
  } else if (newRate < 1.0) {
    document.getElementById('ballTurtleRabbit').src ='images/turtle.png';
  } else {
    document.getElementById('ballTurtleRabbit').src ='images/ball.png';
  }
}

function louderVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var volume = myVideo.volume.toFixed(1);
  if (volume = 1) {
    activityLog.innerHTML+= 'Maximum Volume' + '<br>';
  }
  var newVolume = (myVideo.volume += 0.1).toFixed(1);
  var louderLog = 'Time: ' + time + '   increase volume from ' + volume + ' to ' + (newVolume) + '<br>';
  activityLogArray.unshift(louderLog);
  activityLog.innerHTML+= louderLog;
}

function quieterVideo() {
  var time = myVideo.currentTime.toFixed(2);
  var volume = myVideo.volume.toFixed(1);
  if (volume === '0.0') {
    activityLog.innerHTML+= 'Minimum Volume' + '<br>';
  }
  var newVolume = (myVideo.volume -= 0.1).toFixed(1);
  var quieterLog = 'Time: ' + time + '   increase volume from ' + volume + ' to ' + (newVolume) + '<br>';
  activityLogArray.unshift(quieterLog);
  activityLog.innerHTML+= quieterLog;
}

function loadRollerBabies () {
  source.setAttribute('src', 'videos/rollerbabiesEvian.mp4');
  myVideo.load();
  var loadRollerBabiesLog = '<b>Enjoy watching Roller Babies</b>' + '<br>';
  activityLogArray.unshift(loadRollerBabiesLog);
  activityLog.innerHTML+= loadRollerBabiesLog;
}

function loadBabyMe () {
  source.setAttribute('src', 'videos/babymeEvian.mp4');
  myVideo.load();
  var loadBabyMeLog = '<b>Enjoy watching Baby Me</b>' + '<br>';
  activityLogArray.unshift(loadBabyMeLog);
  activityLog.innerHTML+= loadBabyMeLog;
}

function loadSurfingBaby () {
  source.setAttribute('src', 'videos/babybayEvian.mp4');
  myVideo.load();
  var loadSurfingBabyLog = '<b>Enjoy watching Surfing Babies</b>' + '<br>';
  activityLogArray.unshift(loadSurfingBabyLog);
  activityLog.innerHTML+= loadSurfingBabyLog;
}
