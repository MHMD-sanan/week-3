function run(){
    let n=prompt("enter the size of array");
    n=parseInt(n);
    let array=[10];
    for(let i=0;i<n;i++){
        array[i]=prompt("enter the number");
    }
    document.write("THe input array is : " + array + "<br>");
    let count=0;
    for(let i=0;i<n;i++){
        if(array[i]%2==0){
            count++;
        }
    }
    document.write("<br> Number of even numbers in the given array is "+ count);
}