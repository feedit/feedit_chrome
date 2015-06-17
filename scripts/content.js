(function(global) {
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.type === 'data') {
      chrome.extension.sendRequest({
        type: 'setdata',
        data: {
          url: encodeURIComponent(location.href),
          title: encodeURIComponent(document.title)
        }
      }, function(response) {
        sendResponse('end');
      });
    }
  });
})(this);
