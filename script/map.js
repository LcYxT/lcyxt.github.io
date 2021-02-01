var totalLocation = 3;
var locationList = new Array(totalLocation);
for (var i = 0; i < totalLocation; i++) {
  location_num = parseInt(i, 10)+1
  locationList[i] = document.getElementById('Visited'.concat(location_num.toString());
  if (readCookie('location'.concat(location_num.toString()))) {
  	locationList[i].innerHTML = 'Visited'
  }
}

document.getElementById('remove-cookie').addEventListener('click', function(){
  eraseCookie('location1')
  eraseCookie('location2')
  eraseCookie('location3')
});
