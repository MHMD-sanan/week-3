function run(){
    var n=parseInt(prompt('enter the size'));
    var arr1=[];
    var arr2=[];
    var arr3=[];
    
    for (let i = 0; i< n; i++) {
        for(let j = 0; j< n; j++) {
            arr1[i] = [];
            arr2[i]=[];
            arr3[i]=[];
        }
    }
    for (let i = 0; i< n; i++) {
        for(let j = 0; j< n; j++) {
            arr1[i][j] =parseInt((prompt("enter 1st array data")));
        }
    }
    for (let i = 0; i< n; i++) {
        for(let j = 0; j< n; j++) {
            arr2[i][j] =parseInt((prompt("enter 2nd array data")));
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            arr3[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    document.write("The sum of 2 array is <br>")
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            document.write(arr3[i][j]+" ");
        }
        document.write('<br>');
    }
}