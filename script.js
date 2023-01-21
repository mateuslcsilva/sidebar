const body = document.querySelector('body')
const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle')
const searchBtn = document.querySelector('.search-box')
const modeSwitch = document.querySelector('.toggle-switch')
const modeText = document.querySelector('.mode-text')
const mode = document.querySelector('.mode')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close')
    if(sidebar.classList.contains('close')){
        localStorage.setItem('sidebar', 'closed')
    } else{
        localStorage.setItem('sidebar', 'opened')
    }
})

mode.addEventListener('click', () => {
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        modeText.innerText = "Light Mode"
        localStorage.setItem('theme', 'dark')
    } else {
        modeText.innerText = "Dark Mode"
        localStorage.setItem('theme', 'light')
    }
})

searchBtn.addEventListener('click', () => {
    console.log('here')
    sidebar.classList.remove('close')
})

const getPref = () => {
    let theme = localStorage.getItem('theme')
    let sidebarpref = localStorage.getItem('sidebar');
    if(theme == 'dark') body.classList.add('dark');
    if(sidebarpref == 'closed') sidebar.classList.add('close');
}

getPref()