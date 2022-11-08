function run(){
    class Array{

        getArray(n){
            for (let i = 0; i< n; i++) {
                for(let j = 0; j< n; j++) {
                    array1[i][j] =parseInt((prompt("enter 1st array data")));
                }
            }
        }
        disArray(n){
            for(let i=0;i<n;i++){
                for(let j=0;j<n;j++){
                    document.write(array1[i][j]+" ");
                }
                document.write('<br>');
            }
        }
    }

    let n=parseInt(prompt("enter the size"));
    let arr=new Array();
    let array1=[n];
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            array1[i]=[];
        }
    }
    arr.getArray(n);
    arr.disArray(n);
}