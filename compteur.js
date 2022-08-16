// produit 1 
var btPlus = document.getElementById('btPlus');    
var btMoins = document.getElementById('btMoins');
var nb = document.getElementById('nb');
var cpt = parseInt(nb.innerText);


var cac2 = document.getElementById('cac2')
console.log(cac2)
var prix1 = document.getElementById('prix1')
let price = parseInt(prix1.innerText);
console.log(price)
// cac2 =cac2 + 350000;
// cac2 =prix1 * 1;


btPlus.addEventListener('click', function(){
    cpt  = cpt+1;
    nb.innerHTML = cpt;
    cac2.innerHTML = cpt * price;

})
btMoins.addEventListener('click', function(){   
    cpt  = cpt-1;
    nb.innerHTML = cpt;
    cac2.innerHTML = cpt * price;
})
var btnh1 = document.getElementById('btnh1')

function Toggle(){
    if (btnh1.style.color == "red"){
        btnh1.style.color =  "grey"
    }
    else{
        btnh1.style.color = "red"
    }
}
// btn Delete
var parent_1 =document.getElementById("parent_1");
console.log(parent_1)
parent
var child_1 = document.getElementById("child_1");

var btn_delete =document.getElementById("btn_delete")
console.log(btn_delete)

btn_delete.addEventListener('click', function(){
    var btn_delete = parent_1.removeChild(child_1)
    parent_1.deletechild(btn_delete)
})          




























// produit 2
var btPlus1 = document.getElementById('btPlus1');    
var btMoins1 = document.getElementById('btMoins1');
var nb1 = document.getElementById('nb1');
var cpt1 = parseInt(nb.innerText);


var cac21 = document.getElementById('cac21')
console.log(cac2)
var prix2 = document.getElementById('prix2')
let price1 = parseInt(prix2.innerText);
console.log(price1)
// cac2 =cac2 + 350000;
// cac2 =prix1 * 1;


btPlus1.addEventListener('click', function(){
    cpt1  = cpt1+1;
    nb1.innerHTML = cpt1;
    cac21.innerHTML = cpt1 * price1;

})
btMoins1.addEventListener('click', function(){   
    cpt1  = cpt1-1;
    nb1.innerHTML = cpt1;
    cac21.innerHTML = cpt1 * price1;
})
var btnh1 = document.getElementById('btnh1')

function Toggle(){
    if (btnh2.style.color == "red"){
        btnh2.style.color =  "grey"
    }
    else{
        btnh2.style.color = "red"
    }
}
// btn Delete
var parent_2 =document.getElementById("parent_2");
console.log(parent_1)
parent
var child_2 = document.getElementById("child_2");

var btn_delete1 =document.getElementById("btn_delete1")
console.log(btn_delete1)

btn_delete1.addEventListener('click', function(){
    var btn_delete1 = parent_2.removeChild(child_2)
    parent_2.deletechild(btn_delete1)
})





































// produit 3
var btPlus3 = document.getElementById('btPlus3');    
var btMoins3 = document.getElementById('btMoins3');
var nb3 = document.getElementById('nb3');
var cpt3 = parseInt(nb.innerText);


var cac23 = document.getElementById('cac23')
console.log(cac23)
var prix3 = document.getElementById('prix3')
let price3 = parseInt(prix3.innerText);
console.log(price)
// cac2 =cac2 + 350000;
// cac2 =prix1 * 1;


btPlus3.addEventListener('click', function(){
    cpt3  = cpt3+1;
    nb3.innerHTML = cpt3;
    cac23.innerHTML = cpt3 * price3;

})
btMoins3.addEventListener('click', function(){   
    cpt3  = cpt3-1;
    nb3.innerHTML = cpt3;
    cac23.innerHTML = cpt3 * price3;
})
var btnh1 = document.getElementById('btnh1')

function Toggle(){
    if (btnh3.style.color == "red"){
        btnh3.style.color =  "grey"
    }
    else{
        btnh3.style.color = "red"
    }
}
// btn Delete
var parent_3 =document.getElementById("parent_3");
console.log(parent_3)
parent
var child_3 = document.getElementById("child_3");

var btn_delete3 =document.getElementById("btn_delete3")
console.log(btn_delete3)

btn_delete3.addEventListener('click', function(){
    var btn_delete3 = parent_3.removeChild(child_3)
    parent_3.deletechild(btn_delete3)
})          

