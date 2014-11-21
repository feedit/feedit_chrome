(function(global){
  function execClick(){
    chrome.tabs.executeScript(null, {
      code: 'var get_title=encodeURI(document.title),get_url=encodeURI(location.href);if(get_title&&get_url){function PostData(){var b="http://www.xdf.me/reader/submit/ajax_submit.php?title="+get_title+"&url="+get_url;var c=document.getElementsByTagName("head"),a=document.createElement("script");a.type="text/javascript";a.src=b;c[0].appendChild(a)}PostData()};'
    });
    global.close();
  }
  var get_button = document.getElementById('button');
  get_button.addEventListener('click', execClick);
})(window)
