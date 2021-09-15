var modal = document.getElementById('myModalEgg');
var btn = document.getElementById("myBtnEgg");
var span = document.getElementsByClassName("closeX")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

