var num=prompt("enter the number");
num=parseInt(num);
var sum=0;
for(var i=1;i<=num;i++){
    if(i%2!=0){
        sum=sum+i;
    }
}
console.log("input is "+ num)
console.log("sum of odd numbers is = " + sum);