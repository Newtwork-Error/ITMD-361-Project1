function init(){
//add your javascrip between these two lines of code
  function petMilo(){
    alert('Milo appreciates the pets!');
  }
  
  function petHarry(){
    alert('Harry appreciates the pets!');
  }
  
  function petDaisy(){
    alert('Daisy appreciates the pets!');
  }

  var miloPic1 = document.getElementById('milo-pic1');
  var miloPic2 = document.getElementById('milo-pic2');
  var harryPic1 = document.getElementById('harry-pic1');
  var harryPic2 = document.getElementById('harry-pic2');
  var daisyPic1 = document.getElementById('daisy-pic1');
  miloPic1.addEventListener('click', petMilo);
  miloPic2.addEventListener('click', petMilo);
  harryPic1.addEventListener('click', petHarry);
  harryPic2.addEventListener('click', petHarry);
  daisyPic1.addEventListener('click', petDaisy);
}
window.addEventListener('load', init);