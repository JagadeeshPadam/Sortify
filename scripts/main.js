
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:col";


inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);



function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * (80 - 10)) + 10; // Adjust the range as needed
        divs[i] = document.createElement("div");
        divs[i].classList.add("bar");
        cont.appendChild(divs[i]);
        margin_size = 0.2;
        divs[i].style = "margin:1% " + margin_size + "%;  background-color:black; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + div_sizes[i] + "%;";
    }
}
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
