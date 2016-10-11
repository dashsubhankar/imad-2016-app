console.log('Loaded!');
var element  = document.getElementById('maintext');
element.onclick = function()
{
    var i=0;
    for(i=0;i<40000;i++)
    {
        element.style.marginLeft= i%400 + 'px';
    }
    element.innerHTML= 'YOLO SDASH!';
};