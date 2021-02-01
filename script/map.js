var totalLocation = 3;
var locationList = new Array(totalLocation);
for (var i = 0; i < totalLocation; i++) {
  locationList[i] = document.getElementById('Visited'.concat(i));
  if (readCookie('location'.concat(i))) {
  	locationList[i].innerHTML = 'Visited'
  }
}
