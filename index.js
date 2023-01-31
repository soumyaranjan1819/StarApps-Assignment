const uploadBtn = document.querySelector('#logo-input')
const bgClr = document.querySelector('body');
const inputBtn = document.querySelector('.inputWrapper')
const productImg = document.querySelector('#productImg')
const logo = document.querySelector('#displayLogo')
const fileName = document.querySelector('#fileName')
const deleteButton = document.querySelector('.deleteFile')


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
    fileName.innerHTML= 'UPLOAD LOGO';
    deleteButton.style.display='none'
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

