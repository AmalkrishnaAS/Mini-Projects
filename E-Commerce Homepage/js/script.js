let slideindex=0;
console.log('script added');
corousel();
function corousel(){
let i;
let x=
document.getElementsByClassName('sliderimg')
for(i=0;i<x.length;i++)
{
x[i].style.display='none'

}
slideindex++;
if(slideindex>x.length)
{slideindex=1}
x[slideindex-1].style.display="block"
setTimeout(corousel,5000)
}