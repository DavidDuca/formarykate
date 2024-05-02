let audio = $('#audio');

let response = window.confirm("Are you sure you want to Continue?");
function $(s) {
    return document.querySelector(s);
  }

if(response == true){
    audio.play();
}