
var die = document.getElementById("die");
die.onclick=function(){
    var number = Math.round(Math.random()*5+1);
            var elem = document.getElementById("die_number");
        elem.innerHTML = number ;
    }