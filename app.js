const closedFace = document.querySelector('.closed');
const OpenFace = document.querySelector('.open');

closedFace.addEventListener('click',()=>{
    if(OpenFace.classList.contains('open')){
        OpenFace.classList.add('active');
        closedFace.classList.remove('active');
    }
})
OpenFace.addEventListener('click',()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        OpenFace.classList.remove('active');
    }
})