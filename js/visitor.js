var visitors = {};

function getIP() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = function () {
      reject("Terjadi kesalahan saat mengambil IP");
    };
    xhr.ontimeout = function () {
      reject("Request IP melebihi batas waktu");
    };
  });
}

function getUserAgent() {
  return navigator.userAgent;
}

async function detectVisitors() {
  try {
    var ip = await getIP();
    var ua = getUserAgent();
    var key = ip + "|" + ua;
    var data = sessionStorage.getItem("visitors");
    if (data) {
      visitors = JSON.parse(data);
    }
    if (visitors.hasOwnProperty(key)) {
      visitors[key]++;
    } else {
      visitors[key] = 1;
    }
    data = JSON.stringify(visitors);
    sessionStorage.setItem("visitors", data);
    var count = Object.keys(visitors).length;
    console.log("Jumlah pengunjung unik website: " + count);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", detectVisitors);
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "visible") {
    detectVisitors();
  }
});