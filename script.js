var clickNumber = 2;
var obj = document.createElement("audio");
obj.src = "https://www.dropbox.com/s/75h6vlch87jjwpw/switch-sound.mp3?dl=1";
obj.volume = 1;
obj.autoPlay = false;
obj.preLoad = true;
obj.controls = true;

var obj2 = document.createElement("audio");
obj2.src = "https://www.dropbox.com/s/5vsf74n1svgejqt/Vocal%20distorted%20scream_BLASTWAVEFX_08086.mp3?dl=1";
obj2.volume = 0.3;
obj2.autoPlay = false;
obj2.preLoad = true;
obj2.controls = true;

$('.switch').click(function() {
  obj.play();
  $(this).toggleClass('on');
  $("#girlSVG").attr("class", "");
  if(clickNumber==1){
    $("#girlSVG").addClass("toggle1");
  }else if(clickNumber==2){
    $("#girlSVG").addClass("toggle2"); 
  }else if(clickNumber==3){
    $("#girlSVG").addClass("toggle3"); 
  }else if(clickNumber==4){
    $("#girlSVG").addClass("toggle4"); 
  }else if(clickNumber==5){
    $("#girlSVG").addClass("toggle5"); 
    obj2.play();
  }else if(clickNumber==6){
    $("#girlSVG").addClass("toggle6"); 
    clickNumber = 1;
    return;
  }
  clickNumber++;
});