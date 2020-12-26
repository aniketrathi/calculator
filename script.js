function clr() {
	document.getElementById('result').value="";
}
function fun(event) {
	var node= event.target;
	var txt=node.value;
	console.log(txt);
	document.getElementById('result').value+=txt;
}
function solve(){
	var x=document.getElementById('result').value;
	var y=eval(x).toPrecision(2); 
	document.getElementById('result').value=y;
}