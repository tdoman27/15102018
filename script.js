function zmienKolor()
{
    this.className= "nowa";
}

function zmienKolor2 ()
{
    this.className=""
}

function spr ()
{
	var wiek=document.getElementById("wiek").value;
	var imie=document.getElementById("imie").value;
	var ul = document.getElementById("lista");
	var li = document.createElement("li");
	
	
	if(wiek<18){
		alert(imie+", musisz mieć 18 lat, aby wpisać się na listę!!");
		document.getElementById("wiek").value="";
		document.getElementById("imie").value="";
	}
	
	else{
		li.appendChild(document.createTextNode(imie));
		ul.appendChild(li);
		document.getElementById("wiek").value="";
		document.getElementById("imie").value="";
	}

}



var test=document.getElementById("naglowek");
var przycisk=document.getElementById("przycisk")


test.onmouseover = zmienKolor;
test.onmouseout = zmienKolor2;
przycisk.onclick = spr;

