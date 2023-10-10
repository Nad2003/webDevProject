window.addEventListener("load",checkInternetConection);

function checkInternetConection(){

   const statusText=document.getElementById('statusText');
    const ipAddressText=document.querySelector("#ipAddressText");
    const NetworkText=document.querySelector("#NetworkText");

    statusText.textContent='checking..';

    if(navigator.onLine){
       fetch('https://api.ipify.org?format=json')
       .then((response)=>response.json())
       .then((data)=>{
        ipAddressText.textContent=data.ip;
        statusText.textContent=' Connected'
        const Connection=navigator.Connection;
        const netwoekSpeed=Connection?Connection.downlink+' Mbps':'Unnown';
       })
   .catch(()=>{
    statusText.textContent='  Disconnect';
    ipAddressText.textContent='  -'
    NetworkText.textContent='  -';
   })

    }else{
        statusText.textContent='  Disconnect';
        ipAddressText.textContent='  -'
        NetworkText.textContent='  -';
    }

}
