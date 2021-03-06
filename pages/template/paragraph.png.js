(function() {
  var apiNode = document.getElementById("slide-api");
  var taskCfg = apiNode.taskConfig();
  var sHtml = "<div _config='default-large-small default-looser-impacted p1-p2-p3-p0' _zindex='1000' _left='" + taskCfg.mouseX + "' _top='" + taskCfg.mouseY + "' _width='400'><p>It is sample text.</p></div>\n";
  
  var currId = apiNode.currSlideId();
  if (currId) {
    var currNode = document.getElementById(currId);
    apiNode.innerHTML = sHtml;
    
    currNode.appendChild(apiNode.childNodes[0]);
    apiNode.innerHTML = "";
    
    apiNode.initPagePos(currId);
    apiNode.renewCurrSlide();
    apiNode.selectLastAdded();
    apiNode.setPageModified(currId);
  }
})();
