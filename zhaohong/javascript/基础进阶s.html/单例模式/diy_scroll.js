function moveTop(elem,arg,speed,interval){
  clearInterval(timer);
  var timer = setInterval(function(){
    if(elem.scrollTop > (arg * elem.offsetHeight)){
      if(elem.scrollTop - (arg * elem.offsetHeight) <= speed){
        elem.scrollTop = (arg * elem.offsetHeight);
        clearInterval(timer);
      }
      else {
        elem.scrollTop = elem.scrollTop - speed;
      }
    }
    else if(elem.scrollTop < (arg * elem.offsetHeight)){
      if((arg * elem.offsetHeight) - elem.scrollTop <= speed){
        elem.scrollTop = (arg * elem.offsetHeight);
        clearInterval(timer);
      }
      else{
        elem.scrollTop = elem.scrollTop + speed;
      }
    }
    else if(elem.scrollTop = (arg * elem.offsetHeight)){
      clearInterval(timer);
    }
  },interval);
}
