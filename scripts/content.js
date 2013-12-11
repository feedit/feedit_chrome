(function(global) {
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.type === 'data') {
      chrome.extension.sendRequest({
        type: 'setdata',
        data: {
          url: encodeURI(location.href),
          title: encodeURI(document.title)
        }
      }, function(response) {
        sendResponse('end');
      });
    }
  });
})(this);
