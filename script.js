var textarea = document.getElementById("content");
var counter = document.getElementById("count");
var warning = document.getElementById("warning");
var maxchars = 200;

textarea.addEventListener("input",function(){
    var typed = textarea.value.length;
    if(typed >= maxchars){
        textarea.value = textarea.value.substring(0, maxchars);
        warning.textContent = "You have reached the character limit!"
    }else{
        counter.textContent = `${typed}/${maxchars}characters`;
    }
})