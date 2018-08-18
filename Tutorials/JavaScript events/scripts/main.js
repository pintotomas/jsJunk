var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
		addSum.innerHTML = "your sum is: "+(one+two);
}

var actors = ["simon", "bruce", "ben"];
actors.forEach(addEvents)

function addEvents(name){
	var actor = document.getElementById(name);
	actor.addEventListener("click", picLink);
}

function clean(name){
	var actor = document.getElementById(name);
	var picId = actor.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className == ""){
			
		pic.className = "hide";
		return 1;
	}
	return 0;
}

function picLink(){
	var ret = 0;
	var previousActor = null;
	for(var j = 0; j < actors.length; j++){
		ret += clean(actors[j]);
		if(ret == 1){
			previousActor = actors[j];
			ret = 0;
		}
	}
	if (this.id == previousActor){
		console.log("Hello");
		return;
	}	
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if(pic.className === "hide"){
		pic.className = "";

	}
	else{
		pic.className = "hide";
	}

}