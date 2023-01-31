const uploadBtn = document.querySelector('#logo-input')
const bgClr = document.querySelector('body');
const inputBtn = document.querySelector('.inputWrapper')
const productImg = document.querySelector('#productImg')
const logo = document.querySelector('#displayLogo')
const fileName = document.querySelector('#fileName')
const deleteButton = document.querySelector('.deleteFile')
const heroImage = document.querySelector('.heroImage')
const loader = document.querySelector('#loader')


uploadBtn.addEventListener('change',()=>{
    const reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0])
    reader.addEventListener('load',()=>{
        logo.setAttribute('src',reader.result)
        fileName.innerHTML= uploadBtn.files[0].name;
        deleteButton.style.display='block'
    }) 
})
deleteButton.addEventListener('click',()=>{
    fileName.innerHTML= 'UPLOAD NEW LOGO';
    deleteButton.style.display='none'
})

const colorPickers = document.querySelector('.color-inputs')
colorPickers.addEventListener('click',(e)=>{
    if(e.target.classList.contains('yellow')){
        bgClr.style.backgroundColor='#fffadf'
        inputBtn.style.backgroundColor='#ffcd05'
        productImg.style.display='none'
        loader.style.display='block'
        loader.style.fill='#ffcd05'
        logo.style.display='none'
        setTimeout(()=>{
            productImg.style.display='block'
            productImg.setAttribute('src','./assets/Yello umbrella.png')
            loader.style.display='none'
            logo.style.display='block'
        },800)
    }
    if(e.target.classList.contains('pink')){
        bgClr.style.backgroundColor='#fee2e2'
        inputBtn.style.backgroundColor='#ff2d50'
        productImg.style.display='none'
        loader.style.display='block'
        loader.style.fill='#ff2d50'
        logo.style.display='none'
        setTimeout(()=>{
            productImg.style.display='block'
            productImg.setAttribute('src','./assets/Pink umbrella.png')
            loader.style.display='none'
            logo.style.display='block'
        },800)
    }
    if(e.target.classList.contains('blue')){
        bgClr.style.backgroundColor='#e0f2fe'
        inputBtn.style.backgroundColor='#00c8ff'
        productImg.style.display='none'
        loader.style.display='block'
        loader.style.fill='#00c8ff'
        logo.style.display='none'
        setTimeout(()=>{
            productImg.style.display='block'
            productImg.setAttribute('src','./assets/Blue umbrella.png')
            loader.style.display='none'
            logo.style.display='block'
        },800)
    }
})

