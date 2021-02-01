function location_cookie_handle(name){
  var location_cookie = readCookie(name);
  if (location_cookie) {
    toast_div = document.createElement('div');
    toast_div.setAttribute("class","toast")
    toast_div.setAttribute("role", "alert")
    toast_div.setAttribute("aria-live", "assertive")
    toast_div.setAttribute("aria-atomic", "true")
    toast_body = document.createElement('div');
    toast_body.setAttribute("class","toast-body")
    toast_body.appendChild(document.createTextNode("You've already visited this location!"));
    toast_div.appendChild(toast_body)
    document.getElementById("main-container").appendChild(toast_div)
    createCookie(name, '1', 1);
  }
  else {
    toast_div = document.createElement('div');
    toast_div.setAttribute("class","toast")
    toast_div.setAttribute("role", "alert")
    toast_div.setAttribute("aria-live", "assertive")
    toast_div.setAttribute("aria-atomic", "true")
    toast_body = document.createElement('div');
    toast_body.setAttribute("class","toast-body")
    toast_body.appendChild(document.createTextNode("Visit ".concat(name, " successful!")));
    toast_div.appendChild(toast_body)
    document.getElementById("main-container").appendChild(toast_div)
    createCookie(name, '1', 1);
  }
}
