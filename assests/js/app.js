let darkBtn = document.querySelector('.theme-dark')
let lightBtn = document.querySelector('.theme-light')
let body = document.querySelector('body')


if(localStorage.getItem('theme') == 'dark'){
    body.setAttribute('data-bs-theme' , 'dark')
    darkBtn.classList.add('active')
    lightBtn.classList.remove('active')
}

darkBtn.addEventListener('click' , function(){
    body.setAttribute('data-bs-theme' , 'dark')
    darkBtn.classList.add('active')
    lightBtn.classList.remove('active')

    localStorage.setItem('theme' , 'dark')
})

lightBtn.addEventListener('click' , function(){
    body.setAttribute('data-bs-theme' , 'light')
    darkBtn.classList.remove('active')
    lightBtn.classList.add('active')

    localStorage.setItem('theme' , 'light')
})