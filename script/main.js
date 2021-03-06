var visitCount_cookie = readCookie('visitCount');
if (visitCount_cookie) {
  var visitCount = parseInt(visitCount_cookie, 10);
  visitCount += 1;
  document.getElementById('visitCount').innerHTML = "It is your ".concat(visitCount.toString(), " visit");
  createCookie('visitCount', visitCount.toString(), 1);
}
else {
  document.getElementById('visitCount').innerHTML = "Hi newcomer!";
  createCookie('visitCount', '1', 1);
}


let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false});

scanner.addListener('scan', function (content) {
  document.getElementById('result').innerHTML = content;
  switch (content) {
    case 'https://lcyxt.github.io/location1.html':  // location1
      window.open('https://lcyxt.github.io/location1.html', '_self');
      break;
    case 'https://lcyxt.github.io/location2.html':  // location2
      window.open('https://lcyxt.github.io/location2.html', '_self');
      break;
    case 'https://lcyxt.github.io/location3.html':  // location3
      window.open('https://lcyxt.github.io/location3.html', '_self');
      break;
    default:
      document.getElementById('result').innerHTML = 'It is not a correct QR code!';
  }

});

var dropdown = document.getElementById('dropdown-menu');

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    var i;
    var cameradropdown = new Array(cameras.length);
    var cam_btn = new Array(cameras.length);

    for (i = 0; i < cameras.length; i++) {
      cam_btn[i] = document.createElement('a');
      cam_btn[i].id = "cam-btn".concat(i.toString());
      cam_btn[i].className = "dropdown-item";
      cam_btn[i].onclick = (function (i) {
        return function() {
          console.log(i)
          var myself_btn = document.getElementById('cam-btn'.concat(i.toString()))
          myself_btn.className = 'dropdown-item disabled'
          myself_btn.setAttribute('aria-disabled', 'true')
          myself_btn.setAttribute('tabindex', '-1')
          for (var j = 0; j < cameras.length; j++){
            if (j != i){
              document.getElementById('cam-btn'.concat(j.toString())).className = "dropdown-item";
              document.getElementById('cam-btn'.concat(j.toString())).removeAttribute("aria-disabled");
              document.getElementById('cam-btn'.concat(j.toString())).removeAttribute("tabindex");
            };
          };
          scanner.start(cameras[i]);
        };
      })(i);
      cam_btn[i].href = "#";
      cam_btn[i].appendChild(document.createTextNode(cameras[i].name));
      cameradropdown[i] = document.createElement('li').appendChild(cam_btn[i]);
      dropdown.appendChild(cameradropdown[i]);
    }
  }
}).catch(function (e) {  // catching error from no camera or other error
  var no_cam_label = document.createElement('a');
  no_cam_label.className = 'dropdown-item disabled';
  no_cam_label.setAttribute('aria-disabled', 'true');
  no_cam_label.setAttribute('tabindex', '-1');
  no_cam_label.appendChild(document.createTextNode('No camera found'));
  dropdown.appendChild(document.createElement('li').appendChild(no_cam_label));
  console.error('No camera found.');
  console.error(e);
});