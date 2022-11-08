function run(){
    let n=parseInt(prompt("enter the size of array"));
    let arr1=[];

    function declareArray(){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                arr1[i]=[];
            }
        }
    }

    function  getArray(){
        for (let i = 0; i< n; i++) {
            for(let j = 0; j< n; j++) {
                arr1[i][j] =parseInt(prompt("enter array data"));
            }
        }
    }
    function disArray(){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                document.write(arr1[i][j]+" ");
            }
            document.write('<br>');
        }
    }
    declareArray(); 
    getArray();
    disArray();

}