

var scrolled = false;
var stuckPos;

window.onscroll = function() {
  var txt = document.getElementById('jumbo_txt_container');
  var topPos = txt.getBoundingClientRect().top;

  if ( window.pageYOffset > 600) {
    if (scrolled == false) {
      stuckPos = (topPos + 600) + "px";
      scrolled = true;
    }
    txt.classList.add('scrolled_down');
    txt.style.top = stuckPos;
  } else {
    txt.classList.remove('scrolled_down');
    txt.style.top = "50%";
  }
}
