;(function(global) {
  var button = document.getElementById('button');
  button.addEventListener('click', function() {
    chrome.extension.sendRequest({
      type: 'getdata'
    }, function(response) {
      global.close();
    });
  });
})(this);
