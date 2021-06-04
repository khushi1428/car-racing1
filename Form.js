class Form{
    constructor(){

    }

    display(){
        var title=createElement("h1");
        title.html("Car Racing Game");
        title.position(480,100);

        var input=createInput("please enter your name");
        input.position(480,200);
        
        var button=createButton("PLAY");
        button.position(550,250);
        
        button.mousePressed(function(){
             input.hide()
             button.hide();
             
             var name=input.value();

             var greeting=createElement("h1")
             greeting.html("Welcome "+name);
             greeting.position(480,200)
             
            
        })
    } 
}