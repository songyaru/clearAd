window.BlockAll = function(time, ad) {
  time = time || 0;
  ad = ad || adData;

  var blockAd = function(obj) {
    for (var type in obj) {
      var arr = obj[type] || [];
      for (var i = 0, len = arr.length; i < len; i++) {
        var toBeRemove = jQuery(arr[i]);
        switch (type) {
          case "hide":
            toBeRemove.remove();
            break;
          case "next":
            toBeRemove.nextAll().remove();
            break;
          case "prev":
            toBeRemove.prevAll().remove();
            break;
          default:
            break;
        }
      }
    }
  };

  var host = document.location.host;
  for(var ex in exclude){
    if(host.endsWith(ex)){
      return;
    }
  }

  setTimeout(function() {
    blockAd(ad["all"]);
  }, time);

  for (var i in ad) {
    if (host.endsWith(i)) {
      setTimeout((function(i) {
        return function() {
          blockAd(ad[i]);
        }
      })(i), time);
      break;
    }
  }
};


BlockAll(0);
BlockAll(3000);