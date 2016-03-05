// AppName Object
var AppName = {

  // Init Function
  init: function() {
    console.log('init');
  }
};

// Ready Function
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(AppName.init());
