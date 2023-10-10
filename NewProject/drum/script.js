let sound1=document.querySelector('#box1');
let sound2=document.querySelector('#box2');
let sound3=document.querySelector('#box3');
let sound4=document.querySelector('#box4');



sound1.addEventListener('click',()=>{
  
   
    var audio=new Audio("sound4.mp3");
    audio.play();
 

})//ok

sound2.addEventListener('click',()=>{
    
    var audio=new Audio("sound5.mp3");
   audio.play();


})//ok

sound3.addEventListener('click',()=>{

    
var audio=new Audio("sound3.mp3");
   audio.play();
    


})

sound4.addEventListener('click',()=>{
    
    var audio=new Audio("sound1.mp3");
   audio.play();
   

})


addEventListener('keypress',(event)=>{
    if(event.key==="N" || event.key==='n'){
        var audio=new Audio("sound4.mp3");
        audio.play();
     
    }
    else  if(event.key==="A" ||event.key==='a'){
        var audio=new Audio("sound5.mp3");
        audio.play();
        
    }
    else  if(event.key==="D" ||event.key==='d'){
        var audio=new Audio("sound3.mp3");
        audio.play();
        
    }
    else  if(event.key==="M" ||event.key==='m'){
        var audio=new Audio("sound1.mp3");
        audio.play();
        
    }else{
        alert("please press only ' N A D M' or 'n a d m'");
    }
})

