var upload = document.getElementById('upload');
var image = document.getElementById('image');
//variables need to change the fonts
var font = 0;
var font2 = 0;
function initialize() {
    // Global variables for current values associated with each slider
    var currentBrightness = 50;
    var currentContrast = 100;
    //calls setContrast and setBrightness to get the sliders to work.
    setContrast(currentContrast);
    setBrightness(currentBrightness);
    
    // alert("Begin!"); // debug message
};

function uploadImage(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            image.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
};

$("#upload").change(function(){
    uploadImage(this);
});

function setContrast(value)
{
    
    currentContrast = value;
    var filter = 'contrast(' + currentContrast + '%) ' + 'brightness(' + currentBrightness + ')';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function setBrightness(value)
{
    currentBrightness = value;
    var filter = 'contrast(' + currentContrast + '%) ' + 'brightness(' + currentBrightness + ')';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyMyNostalgiaFilter() 
{   
    var filter = 'saturate(40%) grayscale(100%) contrast(45%) sepia(100%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyGrayscaleFilter() 
{   
    var filter = 'grayscale(100%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applySepiaFilter() 
{   
    var filter = 'sepia(100%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyHueFilter() 
{   
    var filter = 'hue-rotate(180deg)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyInvertFilter() 
{   
    var filter = 'invert(1)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyBlurFilter() 
{   
    var filter = 'blur(2.5px)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};


function revertToOriginal() 
{   
    var filter = '';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function changeColor(color)
{
    document.getElementById("txt").style.color = color;
    document.getElementById("ttl").style.color = color;
}

function changeFont(font1)
{
    //changes the font according to the users input
    if(font1 == 1)
    {
    document.getElementById("ttl").style.fontFamily = "Comic Sans MS, cursive, sans-serif";
    }
    if(font == 2)
    {
      document.getElementById("ttl").style.fontFamily = "Times New Roman, Times, serif";  
    }
     if(font == 3)
    {
      document.getElementById("ttl").style.fontFamily = "Georgia, serif";  
    }
     if(font == 4)
    {
      document.getElementById("ttl").style.fontFamily = "Impact, Charcoal, sans-serif";  
    }
     if(font == 5)
    {
      document.getElementById("ttl").style.fontFamily = "Arial, Helvetica, sans-serif";  
    }
};

function changeFont2(font2)
{
    if(font2 == 1)
    {
    document.getElementById("txt").style.fontFamily = "Comic Sans MS, cursive, sans-serif";
    }
    if(font2 == 2)
    {
      document.getElementById("txt").style.fontFamily = "Times New Roman, Times, serif";  
    }
     if(font2 == 3)
    {
      document.getElementById("txt").style.fontFamily = "Georgia, serif";  
    }
     if(font2 == 4)
    {
      document.getElementById("txt").style.fontFamily = "Impact, Charcoal, sans-serif";  
    }
     if(font2 == 5)
    {
      document.getElementById("txt").style.fontFamily = "Arial, Helvetica, sans-serif";  
    }
};

function submit()
{
     // Read values from form
    var title = document.getElementById("title").value;
    //document.getElementById("debug").innerHTML = title;
    
    var text = document.getElementById("text").value;
    //document.getElementById("debug").innerHTML = text;
    
    // Save filtered image in a variable
    var filteredImage = image;
    
    var color = document.getElementById("color").value;
    
    
    // document.getElementById("debug").appendChild(filteredImage); 

    // Manipulate DOM:
    // 1. Clean up (remove) old stuff
    var parent = form.parentElement;
    while (form.firstChild) {
        form.removeChild(form.firstChild);
    }
        
    // 2. Make room for new stuff: formatted title & text + filtered image
    parent.innerHTML = '<h1> Here is your new postcard! </h1>';
    parent.innerHTML += '<table width = "200"><tr><th><h2 id = "ttl">' + title + '</h2><p id = "txt">' + text + '</p></th></tr></table>';
    parent.appendChild(image);
    
    parent.innerHTML += '<p> Now print this out so you can mail it </p>';
    changeFont(font);
     changeFont2(font2);
     changeColor(color);
    
}

