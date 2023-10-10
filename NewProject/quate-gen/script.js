let btn=document.querySelector('#btn');
let quote=document.querySelector('.quote');
let persone=document.querySelector('.persone');
let quotes=[{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem1"
},


{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem2"
}
,


{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem3"
},


{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem4"
},

{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem5"
},


{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem6"
},


{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem7"
},


{
    quote :    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos vel. Dignissimos laborum distinctio, omnis quam voluptas architecto accusantium corporis?"
    ,persone:"Nadeem8"
}
]

btn.addEventListener('click',function(){
    let rendome = Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[rendome].quote;
    persone.innerText=quotes[rendome].persone;
})