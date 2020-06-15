function Js(){
    document.getElementById("ft").addEventListener("input",ftocen);
    document.getElementById("cen").addEventListener("input",ctofeet);

function ftocen() {
    var f = parseFloat(document.getElementById("ft").value);
    var c = (f*30.48);
    document.getElementById("cen").value = c;
}
function ctofeet() {
    var centi = parseFloat(document.getElementById("cen").value);
    var feet = (centi/30.48);
    document.getElementById("ft").value = feet;
}
}
    