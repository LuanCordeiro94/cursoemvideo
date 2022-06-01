function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
         img.src = 'fotomanha.png'
         document.body.style.backgroundColor = '#D7C392'
    } else if (hora > 12 && hora <= 18) {
        // Boa tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#F5A856'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#011C3A'
    }
}