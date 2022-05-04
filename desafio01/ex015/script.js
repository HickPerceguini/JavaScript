function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length < 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        if ( fsex[0].checked){
            genero = 'Homem'
                if ( idade >=0 && idade <=12){
                //criança
                img.setAttribute('src', 'meninocriança.png')
                }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'garotojovem.png')
                }else if ( idade <50 ){
                //ADULTO
                img.setAttribute('src', 'homemadulto.png')
                }else {
                //idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        }else if(
            fsex[1].checked){
            genero = 'mulher'
                if ( idade >=0 && idade <=12){
                //criança
                img.setAttribute('src', 'meninacriança.png')
                }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'garotojovem.png')
                }else if ( idade <50 ){
                //ADULTO
                img.setAttribute('src', 'mulheradulta.png')
                }else {
                //idoso
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}