
const content2=document.querySelector('.content2');
const content3=document.querySelector('.content3');
const checkicon=document.querySelector('.yes');
const Xicon=document.querySelector('.No');

var i=0;

Xicon.addEventListener('click',function(){
    Textbox();
})
checkicon.addEventListener('click',function(){
    createNode();
})


function createNode()
{
    
    const data=document.getElementById('TextBox').value;
    if(data!='')
    {
        const divs=document.createElement('div');
    const heading=document.createElement('h1');
    divs.append(heading);
    heading.innerText=data;
    heading.style.width='250px';
    heading.style.height='250px';
    heading.style.fontSize='25px';
    heading.style.marginTop='10px';
    heading.style.boxShadow='0px 10px 24px 0px rgba(0,0,0,0.75)';
    heading.style.padding='25px';
    heading.style.overflow='hidden';
    heading.style.backgroundColor=colors();
    heading.style.marginRight='10px';
    heading.style.marginLeft='10px';
    content2.insertAdjacentElement("beforeend",divs);

    divs.addEventListener('dblclick',function()
    {
        content2.removeChild(divs);
    })

    divs.addEventListener('click',function()
    {
        divs.style.textDecoration='line-through';
        divs.style.textDecorationColor='red';
        divs.style.textDecorationThickness='5px';
    })
    }
    else{
        alert('Ooops! Text Box Must not be Empty');
    }
    
   

}
function Textbox()
{
    if(content3.style.display=="none")
    {
        content3.style.display="block";
    }
    else{
        content3.style.display="none";
    }
}
function colors()
{
  let colors=['#80e208','#59e385','#ff4040','#2529d8','#b89bc5'];
    if(i>colors.length-1)
    {
        i=0;
    }
    return colors[i++];
    
}