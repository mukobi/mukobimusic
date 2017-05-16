function jumboTextAlign() {
  w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

  if (x > 960) { //desktop
    var scrolled = false;
    var stuckPos;
    var magicStopPoint = .75*x - .54*y - 74; //equation to convert window height and width to value used to determine how far down the jumbotron text box should stop scrolling

    function jumboTextScroller() { //logic for freezing jumbotron text
      var txt = document.getElementById('jumbo_txt_container');
      var topPos = txt.getBoundingClientRect().top;

      if ( window.pageYOffset > magicStopPoint) {
        if (scrolled == false) {
          stuckPos = (topPos + magicStopPoint) + "px";
          scrolled = true;
        }
        txt.classList.add('scrolled_down');
        txt.style.top = stuckPos;
        txt.style.position = "absolute";
      } else {
        txt.classList.remove('scrolled_down');
        txt.style.top = "50%";
        txt.style.position = "fixed";
      }
    }
    jumboTextScroller(); //initial calling when page loads

    window.onscroll = function() { //update by calling the function when scrolled
      jumboTextScroller();
    }
  } //end desktop

  else { //mobile
    var txt = document.getElementById('jumbo_txt_container');
    txt.style.top = "50%";
    txt.style.position = "absolute";
    txt.style.transform = "translate(-50%,-50%)";
  }
}


window.addEventListener('load', function() {
  jumboTextAlign(); //initial call on page load
  window.addEventListener('resize', jumboTextAlign); //further calls when viewport is resized
}, false);
