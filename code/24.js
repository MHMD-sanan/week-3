function run(){

    class Area{
        sqr(){
            let l=parseInt(prompt("entert length"));
            let b=parseInt(prompt("entert breadth"));
            document.write("Area of Square is "+l*b);
        }
        rect(){
            let l=parseFloat(prompt("entert length"));
            let b=parseFloat(prompt("entert breadth"));
            document.write("Area of Rectangle is "+l*b);
        }
        tri(){
            let h=parseInt(prompt("enter height"));
            let b=parseInt(prompt("enter the base"));
            document.write("Area of Triangle is "+.5*b*h);
        }
        cir(){
            let r=parseInt(prompt("enter radius"));
            document.write("Area of Circle is "+2*3.141*r);
        }
    }

    

    function run(){

    }
    let sqra=new Area();
    let ch=parseInt(prompt("enter the choice"));
    switch(ch){
        case 1:
            sqra.sqr();
            break;
        case 2:
            sqra.rect();
            break;
        case 3:
            sqra.tri();
            break;
        case 4:
            sqra.cir();
            break;
        default:
            alert("invalid choice");
            break;
    }
}
    
