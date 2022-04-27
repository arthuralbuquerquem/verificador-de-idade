function verificar() {
    var dadoAno = new Date().getFullYear();
    var text = document.querySelector('#resTxt');
    var textsexo = document.getElementsByName('sexo')
    var dadoNasc = document.querySelector('#nasc');
    var imagem = document.querySelector('#resImg')
    
    var ano = Number(dadoAno);
    var nasc = Number(dadoNasc.value);
    var idade = ano - nasc;
    
    if(dadoNasc.value == 0 || Number(dadoNasc.value) > ano ) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        if(textsexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                imagem.src = 'images/homem-bebe.jpg'
            } else if(idade <= 19) {
                imagem.src = 'images/homem-jovem.jpg'
            } else if(idade <= 50) {
                imagem.src = 'images/homem-adulto.jpg'
            } else {
                imagem.src = 'images/homem-idoso.jpg'
            }
        } else if (textsexo[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                imagem.src = 'images/mulher-bebe.jpg'
            } else if(idade <= 19) {
                imagem.src = 'images/mulher-jovem.jpg'
            } else if(idade <= 50) {
                imagem.src = 'images/mulher-adulto.jpg'
            } else {
                imagem.src = 'images/mulher-idoso.jpg'
            }
        }
        text.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}