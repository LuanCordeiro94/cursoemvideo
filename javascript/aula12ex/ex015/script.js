function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'fotojovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'fotojovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotomulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}