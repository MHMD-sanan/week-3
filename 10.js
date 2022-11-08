function run(){
    let n=parseInt(prompt("enter the size of array"));
    var array1=[100];
    var array2=[100];
for(let i=0;i<n;i++){
    array1[i]=parseInt(prompt("enter 1st array data"));
}
document.write("1st array input: " + array1 + "<br>");
for(let i=0;i<n;i++){
    array2[i]=parseInt(prompt("enter 2nd array data"));
}
document.write("2nd array input: " + array2 + "<br>");
let temp;
for(let i=0;i<n;i++){
    temp=array1[i];
    array1[i]=array2[i];
    array2[i]=temp;
}
document.write("After swapping <br>");
document.write("1st array is " + array1);
document.write("<br>");
document.write("2nd array is " + array2);
}