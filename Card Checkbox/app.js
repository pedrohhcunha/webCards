document.querySelector('.card').addEventListener('click', () => {
    if(document.querySelector('.card').classList.contains('active')){
        document.querySelector('.card').classList.remove('active')
    } else{
        document.querySelector('.card').classList.add('active')
    }
})