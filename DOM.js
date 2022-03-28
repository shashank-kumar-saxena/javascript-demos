

function checkUserName(val)
{
  var res=document.getElementById('feedback');
  if(el.value.length<val)
  {
    res.textContent = "Username is too short";
  }
  else {
    res.textContent="";
  }
}
function empty()
{
  var res=document.getElementById('feedback');
  res.textContent="";
}
var el =document.getElementById("Username");
el.addEventListener('mouseover',function()
{checkUserName(5);
},false);
el.addEventListener('focus',function()
{checkUserName(5);
},false);
el.addEventListener('mouseout',empty,false);
var pos = document.getElementById('pointer');
function check(event)
{
  pos.value = event.pageX;
  pos.value =pos.value + " " + event.pageY;
}
document.getElementById('body').addEventListener('mousemove',check,false);
