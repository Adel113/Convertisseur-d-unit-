const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});







let cm = document.getElementById("cm");
let m = document.getElementById("m");
let km = document.getElementById("km");
let toureiffel = document.getElementById("toureiffel");
let smartphone = document.getElementById("smartphone");
let goldengate = document.getElementById("goldengate");
let homme = document.getElementById("homme");
let ariane5 = document.getElementById("ariane5");




cm.addEventListener("input", function(){conv(this.id, this.value);});
m.addEventListener("input", function(){conv(this.id, this.value);});
km.addEventListener("input", function(){conv(this.id, this.value);});
toureiffel.addEventListener("input", function(){conv(this.id, this.value);});
smartphone.addEventListener("input", function(){conv(this.id, this.value);});
goldengate.addEventListener("input", function(){conv(this.id, this.value);});
homme.addEventListener("input", function(){conv(this.id, this.value);});
ariane5.addEventListener("input", function(){conv(this.id, this.value);});

function conv(id, valeur){
    if(id == "cm"){
        m.value = (valeur / 100).toFixed(2);
        km.value = (valeur /100000).toFixed(2) ;
        toureiffel.value = (valeur / (33000)).toFixed(2) ;
        smartphone.value = (valeur * 1.467).toFixed(2);
        goldengate.value = (valeur / 1970000).toFixed(2);
        homme.value = (valeur * 0.1467 /100).toFixed(2);
        ariane5.value = (valeur  / 5600).toFixed(2);
    }else if(id == "m"){
        cm.value = (valeur * 100).toFixed(2);
        km.value = (valeur / 1000).toFixed(2);
        toureiffel.value = (valeur / 330).toFixed(2);
        smartphone.value = (valeur * 0.1467).toFixed(2);
        goldengate.value = (valeur / 1970).toFixed(2);
        homme.value = (valeur * 1.756).toFixed(2);
        ariane5.value = (valeur / 56).toFixed(2);

    }else if(id == "km"){
        cm.value =(valeur * 100000).toFixed(2);
        m.value = (valeur * 1000).toFixed(2);
        toureiffel.value = (valeur / 0.33).toFixed(2);
        smartphone.value = (valeur * 0.000147).toFixed(2) ;
        goldengate.value = (valeur /1.97).toFixed(2);
        homme.value = (valeur * 175.6).toFixed(2);
        ariane5.value = (valeur / 0.056).toFixed(2) ;

    }else if(id == "goldengate"){
        cm.value = (valeur * 1970000).toFixed(2);
        m.value = (valeur * 1970).toFixed(2);
        km.value = (valeur * 1.97).toFixed(2);
        toureiffel.value = (valeur * 5.97).toFixed(2);
        smartphone.value = (valeur / 13428.76).toFixed(2);
        homme.value = (valeur *1970 / 0.1764).toFixed(2);
        ariane5.value = (valeur /0.0022046).toFixed(2);

    }else if(id == "smartphone"){
        cm.value = (valeur *16.7).toFixed(2);
        m.value = (valeur * 0.1467).toFixed(2);
        km.value = (valeur *0.0001467).toFixed(2);
        toureiffel.value = (valeur*0.1467 / 330).toFixed(2);
        goldengate.value = (valeur *1.467/ 1970).toFixed(2);
        homme.value = (valeur *1.467/ 1.756).toFixed(2);
        ariane5.value = (valeur *1.467/ 56).toFixed(2);

    }else if(id == "homme"){
        cm.value = (valeur * 1756).toFixed(2);
        m.value = (valeur * 1.756).toFixed(2);
        km.value = (valeur *0.001756).toFixed(2);
        toureiffel.value = (valeur *0.00532121).toFixed(2);
        smartphone.value = (valeur * 11.97001).toFixed(2);
        goldengate.value = (valeur * 0.0008913).toFixed(2);
        ariane5.value = (valeur * 0.03135).toFixed(2);

    }else if(id == "toureiffel"){
        cm.value = (valeur * 33000).toFixed(2);
        km.value = (valeur * 0.33).toFixed(2);
        m.value = (valeur * 330).toFixed(2);
        smartphone.value = (valeur * 2249.48).toFixed(2);
        homme.value = (valeur * 187.92).toFixed(2);
        ariane5.value = (valeur * 5.892).toFixed(2);
        goldengate.value = (valeur * 0.167).toFixed(2);
    }else if(id == "ariane5"){
        cm.value = (valeur * 5600).toFixed(2);
        m.value = (valeur * 56).toFixed(2);
        km.value = (valeur * 0.056).toFixed(2);
        toureiffel.value = (valeur * 0.1696).toFixed(2);
        smartphone.value = (valeur * 381.73).toFixed(2);
        homme.value = (valeur * 31.89066).toFixed(2);
        goldengate.value = (valeur * 0.02842).toFixed(2);  
    }
}

