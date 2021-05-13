const btn = document.querySelector('#btn-time')
const block = document.querySelector('.time-none')

const toggleAdd = () => {
    block.classList.toggle('open')
}

btn.addEventListener('click', toggleAdd)