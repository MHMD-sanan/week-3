function run(){
    var n=parseInt(prompt('enter the size'));
    var arr1=[10];
    var arr2=[10];

    for(let i=0;i<n;i++){
        arr1[i]=parseInt(prompt("enter array data"));
    }
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            arr2[i]=arr1[i]*arr1[j];
            break;
        }
    }
    for(let i=0;i<n-1;i++){
        document.write(arr2[i]+" ");
    }
    
}