function palindrom(){
 const text=document.getElementById('inputText');
const outputText=document.getElementById('outputText');
if(ispalindrom(text.value)==text.value){
outputText.textContent=`${text.value}  is Palindrom`
}else{
    outputText.textContent=`${text.value}  is not Palindrom`
}

}
function ispalindrom(str){
    const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    //console.log(cleanStr);
    const reversStr=cleanStr.split('').reverse().join('');
    //console.log(reversStr);
    return reversStr;
}




document.getElementById('btn').addEventListener("click",palindrom);
addEventListener('keypress',(event)=>{
    if(event.key==='p'||event.key==='P'){
        palindrom();
    }
})