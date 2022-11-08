function run(){
let n=prompt("enter the size of array");
n=parseInt(n);
var a=[10];
for(let i=0;i<n;i++){
    a[i]=prompt("enter the data");
    a[i]=parseInt(a[i]);
}

for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(a[j]>a[i]){
            let temp=a[j];
            a[j]=a[i];
            a[i]=temp;
        }
    }
}
document.write("sorted array is "+ a);
}