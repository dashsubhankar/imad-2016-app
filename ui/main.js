console.log('Loaded!');
//var element  = document.getElementById('maintext');
//var marginLeft=0;
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
var counter=0;
var button = document.getElementById('counter');
button.onclick = function()
{
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML =  counter.toString();
};