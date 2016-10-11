console.log('Loaded!');
var element  = document.getElementById('maintext');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    element.stle.marginLeft=marginLeft + 'px';
}
element.onclick = function()
{
    var interval = setInterval(moveRight,100);
    element.innerHTML= 'YOLO SDASH!';
};