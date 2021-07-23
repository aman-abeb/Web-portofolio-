
  var functionRun=false;
  function menu(){
    var elem=document.getElementById("menu");
    if(elem.className === "header"){
      elem.className += "responsive";
      elem.style.top="0";
    }
    else{
      elem.className = "navb";
      elem.style.top="-50%";
    }
  }