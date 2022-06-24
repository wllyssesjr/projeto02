let botao = document.getElementById('btn')

botao.addEventListener('click', () => {
    let perg1 = document.querySelector('#perg1')
    let pergunta1 = Number(perg1.options[perg1.selectedIndex].value)
    let perg2 = document.querySelector('#perg2')
    let pergunta2 = Number(perg2.options[perg2.selectedIndex].value)
    let perg3 = document.querySelector('#perg3')
    let pergunta3 = Number(perg3.options[perg3.selectedIndex].value)
    let perg4 = document.querySelector('#perg4')
    let pergunta4 = Number(perg4.options[perg4.selectedIndex].value)
    let perg5 = document.querySelector('#perg5')
    let pergunta5 = Number(perg5.options[perg5.selectedIndex].value)

    let totalPerguntas = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5

    if(totalPerguntas < 2) {
        alert('Você é inocente.')
    } else if(totalPerguntas === 2) {
        alert('Você é suspeito(a).')
    } else if(totalPerguntas > 2 && totalPerguntas <= 4) {
        alert('Você é cúmplice!')
    } else {
        alert('Você é o(a) assassino(a)!')
    }
})