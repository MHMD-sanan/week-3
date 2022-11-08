function run(){
    var income=parseInt(prompt("enter the annual income"));
    if(income<=250000){
        document.write("You have no tax");
    }
    else if(income>250000&&income<=500000){
        document.write("Income Tax Amount is " + (income/100)*5);
    }
    else if(income>500000&&income<=1000000){
        document.write("Income Tax Amount is " + (income/100)*20);
    }
    else{
        document.write("Income Tax Amount is " + (income/100)*30);
    }
}