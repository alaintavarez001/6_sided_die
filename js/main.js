
var die = document.getElementById("die");
die.onclick=function(){
    die.src= "img/dodecahedron.gif";
    var elem = document.getElementById("die_number");
    elem.innerHTML = "";
    setTimeout(function(){
            die.src= "img/dodecahedron-frame1.png";
            var number = Math.round(Math.random()*11+1);
            elem.innerHTML = number ;
    },2000);
}



