function run(){
	class operations{
		add(num1,num2){
			return(num1+num2);
		}
		sub(num1,num2){
			return(num1-num2);
		}
		mul(num1,num2){
			return(num1*num2);
		}
		div(num1,num2){
			return(num1/num2);
		}
	}


	let num1=parseInt(prompt("enter 1st num"));
	let num2=parseInt(prompt("enter 2nd num"));
	let op=new operations();
	let ch=parseInt(prompt("enter the choice"));

	switch(ch){
		case 1:
			document.write(op.add(num1,num2));
			break;
		case 2:
			document.write(op.sub(num1,num2));
			break;
		case 3:
			document.write(op.mul(num1,num2));
			break;
		case 4:
			document.write(op.div(num1,num2));
			break;
		default:
			alert("invalid inout");
	}
}



