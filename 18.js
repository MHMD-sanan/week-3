function run(){
    alert("enter mark of student");
    let wt=parseInt(prompt("entert written test mark"));
    let le=parseInt(prompt("enter  lab exa mark"));
    let as=parseInt(prompt("enter marks of lab exam"));
    let grade=((wt*70)/100+(le*20)/100+(as*10)/100);
    document.write("Grade od student is " + grade);
}