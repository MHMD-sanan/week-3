
            str1=[10];
            str2=[10];
            var str1=prompt("entert the string");
            var len=str1.length
            let flag=0;
            for(let i=0,j=len-1;i<j;i++,j--){
                if(str1[i]!=str1[j]){
                    flag=1;
                }   
            }
            if(flag==1){
                document.write(str1 + " is not a palindrom");
            }
            else{
                document.write(str1 + " is palindrom");
            }