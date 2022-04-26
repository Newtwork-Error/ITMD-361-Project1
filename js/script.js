function initMap(){
  const myLatLng = { lat: 41.8349, lng: -87.6270 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
  });
  
  const contentString = "This is IIT's Campus";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "IIT",
  });
  
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
	  map,
	  shouldFocus: false,
	});
  });
  
  const campusBoundriesCoord = [
    { lat: 41.83946, lng: -87.63003 },
    { lat: 41.83961, lng: -87.62349 },
    { lat: 41.83290, lng: -87.62332 },
    { lat: 41.83284, lng: -87.62655 },
    { lat: 41.83103, lng: -87.62655 },
    { lat: 41.83103, lng: -87.63003 },
	{ lat: 41.83946, lng: -87.63003 },
  ];
  
  const campusBoundries = new google.maps.Polyline({
    path: campusBoundriesCoord,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  campusBoundries.setMap(map);
}

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
  if(miloPic1 != null){
    miloPic1.addEventListener('click', petMilo);
    miloPic2.addEventListener('click', petMilo);
    harryPic1.addEventListener('click', petHarry);
    harryPic2.addEventListener('click', petHarry);
    daisyPic1.addEventListener('click', petDaisy);
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
window.addEventListener('load', init);