function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (minuto <10) {
        minuto = '0' + minuto
    }
    if (hora >= 0 && hora < 12) {
        //  BOM DIA!
        img.src = 'imagemmanhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagemtarde.png'
        document.body.style.background = '#b9846f'
    } else {
       // BOA NOITE!
       img.src = 'imagemnoite.png'
       document.body.style.background = '#515154'
    }
}


