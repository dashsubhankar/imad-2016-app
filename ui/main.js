console.log('Loaded!');
var element  = document.getElementById('maintext');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    element.style.marginLeft=marginLeft + 'px';
    img.style.marginLeft = marginLeft + 'px';
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
