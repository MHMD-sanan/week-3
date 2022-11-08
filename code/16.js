    function run(){
        let num=parseInt(prompt("entert the number"));
            let count=0;
            for(let i=1;i<=num;i++){
                if(num%i==0){
                    count++;
                }
            }
            if(count==2){
                document.write(num + " is a prime number");
            }
            else{
                document.write(num + " is not a prime number");
            }
    }