var totalLocation = 3;
var locationList = new Array(totalLocation);
for (var i = 0; i < totalLocation; i++) {
  locationList[i] = document.getElementById('Visited'.concat(i));
  if (readCookie('location'.concat(i))) {
  	locationList[i].innerHTML = 'Visited'
  }
}

document.getElementById('remove-cookie').addEventListener('click', function(){
  eraseCookie_and_show('visitCount')
  eraseCookie('location1')
  eraseCookie('location2')
  eraseCookie('location3')
});
