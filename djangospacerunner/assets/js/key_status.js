var _keydown = {};
var _keyup = {};

$(function() {
  
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  $(document).bind("keydown", function(event) {
    _keydown[keyName(event)] = true;
  });
  
  $(document).bind("keyup", function(event) {
    _keydown[keyName(event)] = false;
  });
});
