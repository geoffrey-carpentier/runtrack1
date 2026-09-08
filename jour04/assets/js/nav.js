function getScrollPercent() {
    var scrollTop = document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var scrollHeight = document.body.scrollHeight;

    return (scrollTop / (scrollHeight - windowHeight)) * 100;
}
function plateFormeNav() {
    var x = document.getElementById("LaPlateformeNav");
    if (x.className === "menuHead") {
        x.className += " responsive";
        var scrollT = getScrollPercent();
        x.style.position = "sticky";
        x.style.top = scrollT + "px";
    } else {
        x.className = "menuHead";
    }
}