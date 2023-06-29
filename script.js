var numOne ,numTwo ,res,temp;
function add(){
  numOne=parseInt(document.getElementById("fst").value)
  numTwo=parseInt(document.getElementById("snd").value)
  if(numOne && numTwo){
    temp=document.getElementById("res");
    temp.style.display="block";
    res=numOne+numTwo;
    document.getElementById("res2").innerHTML=res;
  }
}
function sub(){
  numOne=parseInt(document.getElementById("fst").value)
  numTwo=parseInt(document.getElementById("snd").value)
  if(numOne && numTwo){
    temp=document.getElementById("res");
    temp.style.display="block";
    res=numOne-numTwo;
    document.getElementById("res2").innerHTML=res;
  }
}
function mul(){
  numOne=parseInt(document.getElementById("fst").value)
  numTwo=parseInt(document.getElementById("snd").value)
  if(numOne && numTwo){
    temp=document.getElementById("res");
    temp.style.display="block";
    res=numOne*numTwo;
    document.getElementById("res2").innerHTML=res;
  }
}
function div(){
  numOne=parseInt(document.getElementById("fst").value)
  numTwo=parseInt(document.getElementById("snd").value)
  if(numOne && numTwo){
    temp=document.getElementById("res");
    temp.style.display="block";
    res=numOne/numTwo;
    document.getElementById("res2").innerHTML=res;
  }
}