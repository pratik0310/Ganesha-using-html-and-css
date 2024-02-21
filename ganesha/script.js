// function for hover on book

const element=document.getElementById('book')
const css=document.getElementById('css')
const html=document.getElementById('html')
const py=document.getElementById('py')
const js=document.getElementById('js')


element.addEventListener('click',function(event){
    css.style.boxShadow="10px 10px 30px white";
    html.style.boxShadow="10px 10px 30px white";
    py.style.boxShadow="10px 10px 30px white";
    js.style.boxShadow="10px 10px 30px white";

});

element.addEventListener('mouseout',function(event){

    css.style.boxShadow="none";
    html.style.boxShadow="none";
    py.style.boxShadow="none";
    js.style.boxShadow="none";

    
    });