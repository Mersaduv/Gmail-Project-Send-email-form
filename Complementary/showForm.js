let show=document.querySelector('#jam ','p'),
    container=document.querySelector('#container')


eventlistener()
function eventlistener() {
    show.addEventListener('click' , loadForm)
    container.addEventListener('click' , loadForm)
}
function loadForm() {
    
        container.style.display='block';
        show.style.display='none';

}