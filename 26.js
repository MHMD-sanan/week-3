
let my_string ="4321";
try{
     let revstring = my_string.split('').reverse().join('')
     console.log(`Reversed string is : ${my_string}`) 
}catch(err){
     console.log(`Error : ${err.message}`)
}finally{
     console.log(`Type of my_string is : ${typeof my_string}`)
}