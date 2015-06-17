(function(global) {
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.type === 'setdata') {
      var data = request.data;
      var api = 'http://xdf.me/feedit/api?type=add&title=';
      api += data.title;
      api += '&url=' + data.url;
      console.log(api)
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', api, true);
      xmlHttp.onreadystatechange = function(d) {
        if (xmlHttp.readyState == 4) {
          sendResponse('end');
        }
      };
      xmlHttp.send(null);
    } else if (request.type === 'getdata') {
      chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendRequest(tab.id, {
          type: 'data'
        }, function(response) {
        });
      });
      setTimeout(function() {
        sendResponse('end');
      }, 200);
    }
  });
})(this);
