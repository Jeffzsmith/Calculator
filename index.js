/*document.querySelector(".add").addEventListener("click",add);
document.querySelector(".sub").addEventListener("click",sub);
document.querySelector(".mul").addEventListener("click",mul);
document.querySelector(".div").addEventListener("click",div);
document.querySelector(".clear").addEventListener("click",clear);
function add(){
    var n1=document.querySelector("#num1").value;
    var n2=document.querySelector("#num2").value;
    var n=parseInt(n1)+parseInt(n2);
    document.querySelector("h2").innerHTML="Answer: "+n;
}
function sub(){
    var n1=document.querySelector("#num1").value;
    var n2=document.querySelector("#num2").value;
    var n=n1-n2;
    document.querySelector("h2").innerHTML="Answer: "+n;
}
function mul(){
    var n1=document.querySelector("#num1").value;
    var n2=document.querySelector("#num2").value;
    var n=n1*n2;
    document.querySelector("h2").innerHTML="Answer: "+n;
}
function div(){
    var n1=document.querySelector("#num1").value;
    var n2=document.querySelector("#num2").value;
    var n=n1/n2;
    document.querySelector("h2").innerHTML="Answer: "+n;
}
function clear(){
    document.querySelector("#num1").value='';
    document.querySelector("#num2").value='';
    document.querySelector("h2").innerHTML="Answer: ";
}
for(var i=0;i<=20;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    document.querySelector(".textbox").value+=this.innerHTML;
    });
}
*/
var value=document.querySelector(".textbox").value;
var count=document.querySelectorAll(".btn").length;
for(var i=0;i<count;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        value+=this.textContent;
        document.querySelector(".textbox").value=value;
    });
}
    document.querySelector(".ac").addEventListener("click",function(){
        value="";
        document.querySelector(".textbox").value=value;
   });
   document.querySelector(".c").addEventListener("click",function(){
    value = value.slice(0, -1);
    document.querySelector(".textbox").value=value;
   });
   
   document.querySelector(".equal").addEventListener("click",function(){
    var x=eval(value);
    document.querySelector(".textbox").value=x;
   });

   
