function run(){
    var library ={
        book1:{
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true
        },
        book2:{
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true
    
        },
        book3:{
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false
    
        }
    }

    for (var i in library) {
  
        if(library[i].readingStatus==false){
            document.write(" You still need to read '" + library[i].title + "' by '" + library[i].author + "'<br>");
        }
        else{
            document.write("Already read  '" + library[i].title + "' by '" + library[i].author + "'<br>");
        }
    }
    
}