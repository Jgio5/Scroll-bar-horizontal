window.onscroll = function() {
    myFunction();
};

function myFunction() {
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrlled = (winscroll / height) * 100;

    document.getElementById('scroll_indicator').style.width = scrlled + "%";
}