(function() {
  var apiNode = document.getElementById("slide-api");
  var taskCfg = apiNode.taskConfig();
  var sHtml = "<div class='svg-shape' _config='small-default-large default-looser-impacted p1-p2-p3-p0 center-right-default' _widget=\"['rgb(128,128,128)','rgba(0,0,0,0)',0,30]\" _zindex='998' _left='" + taskCfg.mouseX + "' _top='" + taskCfg.mouseY + "' _width='120' _height='120'><div class='shape-canvas'></div><div class='rotate-txt S5'></div><div class='img-resource'><link rel='bookmark' type='text/xml' href='/software/slide11/$images/shape/frame00.svg.json' /></div></div>\n";
  
  if (taskCfg.svgTool) {
    apiNode.innerHTML = sHtml;
    apiNode.addSvgWidget();
  }
  else {
    var currId = apiNode.currSlideId();
    if (currId) {
      var currNode = document.getElementById(currId);
      apiNode.innerHTML = sHtml;
      
      currNode.appendChild(apiNode.childNodes[0]);
      apiNode.innerHTML = "";
      
      apiNode.initPagePos(currId);
      apiNode.renewCurrSlide();
      apiNode.selectLastAdded();
      apiNode.loadSvgRes();
      apiNode.setPageModified(currId);
    }
  }
})();
