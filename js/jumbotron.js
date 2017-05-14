
window.addEventListener('load',
  function() {

  w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;



  if (x > 960) {
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
      } else {
        txt.classList.remove('scrolled_down');
        txt.style.top = "50%";
      }
    }


    jumboTextScroller(); //initial calling when page loads


    window.onscroll = function() {
      jumboTextScroller();
    }
  }






}, false);
