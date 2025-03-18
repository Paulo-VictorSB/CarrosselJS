document.addEventListener('DOMContentLoaded', ()=>{
    let i = 1
    document.querySelector('#slide1').checked = true;

    setInterval(()=>{
        nextImage()
    }, 5000)

    function nextImage(){
        i++
        if(i>5){
            i = 1
        }
        document.querySelector(`#slide${i}`).checked = true;
    }

})