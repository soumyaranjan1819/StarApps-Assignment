const uploadBtn = document.querySelector('#logo-input')
let bgClr = document.querySelector('body');
let inputBtn = document.querySelector('.input-btn')
let productImg = document.querySelector('#productImg')


uploadBtn.addEventListener('change',()=>{
    const reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0])

    reader.addEventListener('load',()=>{
        document.querySelector('#message').innerHTML= uploadBtn.files[0].name;
        document.querySelector('#displayLogo').setAttribute('src',reader.result)
    }) 
})

const colorPickers = document.querySelector('.color-inputs')
colorPickers.addEventListener('click',(e)=>{
    if(e.target.classList.contains('yellow')){
        bgClr.style.backgroundColor='#fffadf'
        inputBtn.style.backgroundColor='#ffcd05'
        productImg.setAttribute('src','./assets/Yello umbrella.png')
    }
    if(e.target.classList.contains('pink')){
        bgClr.style.backgroundColor='#fee2e2'
        inputBtn.style.backgroundColor='#ff2d50'
        productImg.setAttribute('src','./assets/Pink umbrella.png')
        
    }
    if(e.target.classList.contains('blue')){
        bgClr.style.backgroundColor='#e0f2fe'
        inputBtn.style.backgroundColor='#00c8ff'
        productImg.setAttribute('src','./assets/Blue umbrella.png')
    }
})

