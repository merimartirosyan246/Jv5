let arr=['red', 'green', 'blue', 'orange','red', 'green', 'blue', 'orange']
let x=8
let y=0
let k=20
 dv3.innerHTML=k
 function f1(){
    k--
    dv3.innerHTML=k
    if(k==0){
        clearInterval(r)
    }
 }
dv1.innerHTML=x
dv2.innerHTML=y
for (let i=0; i<arr.length; i++){
    let d=document.createElement('div')
    document.body.appendChild(d)
    d.style.width='100px'
    d.style.height='100px'
    d.style.border='1px solid'
    d.setAttribute('class', 'dv')
    d.style.background=arr[i]
d.onclick=function(){
   d.style.left='200px'
   d.style.opacity=0
   x--
   y++
   dv1.innerHTML=x
   dv2.innerHTML=y

   if(dv1.innerHTML==0 && dv3.innerHTML>=0){
    dv.innerHTML='You win'
   }
   if( dv3.innerHTML==0 ){
    dv.innerHTML='You lose'
   }
}
}
let r=setInterval(function()
{f1()},500)


let d=document.createElement('div')
document.body.appendChild(d)
d.style.width='200px'
d.style.height='55px'
d.style.textAlign='center'
d.style.fontWeight='bold'
d.style.fontFamily='Verdana'
d.style.border='1px solid'
d.style.fontSize='40px'
d.style.color='#FF7F50'
d.setAttribute('id', 'dv')
