(function() {
  var apiNode = document.getElementById("slide-api");
  var taskCfg = apiNode.taskConfig();
  var sHtml = "<div class='svg-shape' _config='small-default-large default-looser-impacted p1-p2-p3-p0 center-right-default' _widget=\"['rgb(51,51,51)','rgba(51,51,51,0.1)',0,3,['']]\" _zindex='998' _left='" + taskCfg.mouseX + "' _top='" + taskCfg.mouseY + "' _width='100' _height='40'><div class='shape-canvas'></div><div class='rotate-txt S5'>entity</div><div class='img-resource'><link rel='bookmark' type='text/xml' href='/software/slide11/$images/shape/rect.svg.json' /></div></div>\n";
  
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
