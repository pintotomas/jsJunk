
var myList = ['apples', 'oranges', 'bananas']

/*myList.forEach(function(value,index){
	alert(value);
})*/
var times = 0;
while (times != 10){
	console.log("tried it", times);
	times+=1;
}

var times = 0;

do{
	console.log("tried it", times);
	times++;
}while(times != 10);

for(var j = 0; j != myList.length; j++){
	console.log(myList[j]);
}