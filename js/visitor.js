var visitors = {};

function getIP() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.ipify.org", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      return xhr.responseText;
    }
  };
}

function getUserAgent() {
  return navigator.userAgent;
}

function detectVisitors() {
  var ip = getIP();
  var ua = getUserAgent();
  var key = ip + "|" + ua;
  if (visitors.hasOwnProperty(key)) {
    visitors[key]++;
  } else {
    visitors[key] = 1;
  }
  var count = Object.keys(visitors).length;
  console.log("Jumlah pengunjung unik website: " + count);
}

window.onload = detectVisitors;