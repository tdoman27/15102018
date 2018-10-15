

function zmienKolor()
{
    this.className= "nowa";
}

function zmienKolor2 ()
{
    this.className=""
}

function alert ()
{
    alert("imie")
}

var imie=document.getElementById("imie")
var test=document.getElementById("kolorowe");
var przycisk=document.getElementById("przycisk")

test.onmouseover = zmienKolor;
test.onmouseout = zmienKolor2;
przycisk.onclick=alert;

