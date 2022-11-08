function run(){
     
try {
     let userHeight =parseInt(prompt("enter user height"));
     if(isNaN(userHeight)){
          throw new Error('notANumberError')
     } else if(userHeight > 200){
          throw new Error('HugeHeightError')
 
     }else if(userHeight < 40){
          throw new Error('TinyHeightError')
     }else{
          console.log("Valid")
     } 
 } catch (error) {
     console.log(error.message)
 }
}