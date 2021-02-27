const img = document.querySelector('#imagemCardPessoal')
const ul = document.querySelector('#ulCardPessoal')
const conteudo = document.querySelector('#conteudoCard')

function controlarImagem(){
    if (img.classList.contains('active')) {
        img.classList.remove('active')
        ul.classList.remove('imgActive')
        conteudo.style.display = "block"
    } else {
        img.classList.add('active')
        ul.classList.add('imgActive')
        conteudo.style.display = "none"
    }
}