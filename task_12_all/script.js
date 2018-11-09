//1
console.log('task_1:');
var name="Peter";
var age="20";
var message='My name is ' +name+'. I am '+age+ 'years';
console.log(message);


//2
console.log('task_2:');
var check=true;
var result;
result=(check==true)?"Good":"Bad";
console.log(result);

//3
console.log('task_3:');
var resultArray=[];
var first=1;
var second=2;
var senseOfLife=42;
resultArray.push(first);
console.log(resultArray);
resultArray.push(second);
console.log(resultArray);
resultArray.unshift(senseOfLife);
console.log(resultArray);

//4
console.log('task_4:');
var resultA=[];
var start=100;
for (var i=start,j=0; i>= 0; i--,j++){
	resultA[j]=i;
}
console.log(resultA);


//5
console.log('task_5:');
var num;
function isEven(number){
	if((number%2)==0){
		num=true;
	}else{
		num=false;
	}
	return num;
}
console.log(isEven(1));
console.log(isEven(4));


//6
console.log('task_6:');
var senseOfLife=42;
function showVariable(otherSenseOfLife){
	if (otherSenseOfLife!==undefined) {
		senseOfLife=otherSenseOfLife;
	}
		return senseOfLife;
}
console.log(showVariable());
console.log(showVariable(4));


//7
console.log('task_7:');
var id=document.getElementById('test');
console.log(id);
var className=document.getElementsByClassName('test');
console.log(className);
var tag=document.getElementsByTagName('div');
console.log(tag);


//8
console.log('task_8:');
var child1=document.createElement('li');
var text1=document.createTextNode('first');
child1.appendChild(text1);

var parent=document.getElementById('test_1');
parent.appendChild(child1);

var child2=document.createElement('li');
var text2=document.createTextNode('second');
child2.appendChild(text2);
parent.appendChild(child2);

var child3=document.createElement('li');
var text3=document.createTextNode('third');
child3.appendChild(text3);
parent.appendChild(child3);

var children=document.getElementsByTagName('li');
for (var i = 0; i < children.length; i++) {
	console.log(children[i]);
}


//9
console.log('task_9:');
function count(num1,num2,mark){
	var result;
	switch(mark){
		case '+': 
			result=num1+num2;
			break;		
		case '-': 
			result=num1-num2;
			break;
		case '*': 
			result=num1*num2;
			break;
		case '/': 
			result=num1/num2;
			break;
		default:
			result='Щось не те...';
	}
	return result;
}
console.log(count(2,2,'+'));
console.log(count(2,3,'-'));
console.log(count(5,2,'*'));
console.log(count(2,2,'/'));
console.log(count(2,2,'6'));
