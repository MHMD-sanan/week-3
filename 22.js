function run(){
    var n=parseInt(prompt("enter the size of array"));
    array1=[];
    array2=[];
    array3=[];


    getArray();
    addArray();
    disArray();

    function getArray(){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                array1[i]=[];
                array2[i]=[];
                array3[i]=[];    
            }
        }

        for (let i = 0; i< n; i++) {
            for(let j = 0; j< n; j++) {
                array1[i][j] =parseInt((prompt("enter 1st array data")));
            }
        }
        for (let i = 0; i< n; i++) {
            for(let j = 0; j< n; j++) {
                array2[i][j] =parseInt((prompt("enter 2nd array data")));
            }
        }
    }

    function addArray(){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                array3[i][j]=array1[i][j]+array2[i][j];
            }
        }
    }

    function disArray(){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                document.write(array3[i][j]+" ");
            }
            document.write('<br>');
        }
    }
    
}