let screenC=window.document.getElementById('screen'); 
let btns= window.document.getElementsByName('btn'); 
let equalBtn=window.document.getElementsByClassName('is-equal');
let deleteBtn=window.document.getElementsByClassName('delete') ;
let number; 

for(let i=0;i<btns.length-1;i++){ 
  btns[i].addEventListener('click',function(){
   number= btns[i].getAttribute('data-num'); 

    screenC.value+=number; 
  })
} 

equalBtn[0].addEventListener('click',function(){
 if(screenC.value==''){
  screenC.value='ERROR'
 
 }else{
   let value= eval(screenC.value); 
   screenC.value=value; 
   
 }
   
}) 

deleteBtn[0].addEventListener('click',function(){
   screenC.value='';
})