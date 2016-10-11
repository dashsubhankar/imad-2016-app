console.log('Loaded!');
var element  = document.getElementbyId('maintext');
element.onclick = function()
{
    var i=0;
    for(i=0;i<400;i++)
    {
        element.style.marginLeft=i;
    }
    element.innerHTML= 'YOLO SDASH!';
};