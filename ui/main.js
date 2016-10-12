console.log('Loaded!');
var element  = document.getElementById('maintext');
var marginLeft=0;
/*function moveRight()
{
    if(marginLeft<400)
    {
        marginLeft = marginLeft+10;
        element.style.marginLeft=marginLeft + 'px';
        img.style.marginLeft = marginLeft + 'px';
    }
    else
    var int = setInterval(moveLeft,100);
}
function moveLeft()
{
        if(marginLeft>0)
        {
            marginLeft = marginLeft-10;
            element.style.marginLeft= marginLeft + 'px';
            img.style.marginLeft = marginLeft + 'px';
        }
        else moveRight();
}
element.onclick = function()
{
    var interval = setInterval(moveRight,100);
    element.innerHTML= 'YOLO SDASH!';
};
var img = document.getElementById('madi');
img.onclick = function()
{
    var interval = setInterval(moveRight,100);
};
*/

//var counter = 0;
var button = document.getElementById('counter');
button.onclick = function()
{
  var request = new XTMLHttpRequest();
  req.onreadystatechange = function()
  {
      if(request.readyState === XTMLHttpRequest.DONE)
      {
        if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }  
      }
      
      request.open('GET','http://dashsubhankar.imad.hasura-app.io/counter',true);
      req.send(null);
  };
  
  
  
  
  
  
};