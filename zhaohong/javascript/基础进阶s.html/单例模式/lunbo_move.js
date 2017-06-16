function moveLeft(elem,target,speed,interval){
  clearInterval(elem.timer);
  //速度的正负是由起始的位置和目标决定的
  speed = target > elem.offsetLeft ? speed:-speed;

  elem.timer = setInterval(function(){
    elem.style.left = elem.offsetLeft + speed + "px";

    if(Math.abs(elem.offsetLeft - target) <= Math.abs(speed)){
    elem.style.left = target + "px";
    clearInterval(elem.timer);
    }
  },interval);
}
