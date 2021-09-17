var Lugar_pokemons = window.document.getElementById('lugarpokemons')
//Area das pokebolas
var Areas_pokebolas1_2_3 = []
Areas_pokebolas1_2_3[0] = window.document.getElementById('ppokeB0')
Areas_pokebolas1_2_3[1] = window.document.getElementById('ppokeB1')
Areas_pokebolas1_2_3[2] = window.document.getElementById('ppokeB2')
//imagens das pokebolas
var Imagens_pokebolas1_2_3 = []
Imagens_pokebolas1_2_3[0] = window.document.getElementById('pokeB0')
Imagens_pokebolas1_2_3[1] = window.document.getElementById('pokeB1')
Imagens_pokebolas1_2_3[2] = window.document.getElementById('pokeB2')
//local das imagens das pokebolas
var caixa_pokebolas = [] 
caixa_pokebolas[0] = window.document.getElementById('caixa_pokebola0')
caixa_pokebolas[1] = window.document.getElementById('caixa_pokebola1')
caixa_pokebolas[2] = window.document.getElementById('caixa_pokebola2')
var imagem_pokemon = window.document.getElementById(`pokemon0`)
var vali2 = 0
var vali = 0
var Aberta_pokebola1_2_3 = [0, 0, 0]
//Variáveis de simplificação
var Aberta_pokebola = 0
var AreaPokebola = ''
var Número_pokebola = 0
var frames = 100
var c = ''
var n = 0
var MiliSecon = 1500
Areas_pokebolas1_2_3[0].addEventListener('mouseenter', function() {
    vali2 = 0
    Aberta_pokebola = Aberta_pokebola1_2_3[0]
    AreaPokebola = Areas_pokebolas1_2_3[0]
    Número_pokebola = Imagens_pokebolas1_2_3[0]
    entrar()
})
Areas_pokebolas1_2_3[1].addEventListener('mouseenter', function() {
    vali2 = 1
    Aberta_pokebola = Aberta_pokebola1_2_3[1]
    AreaPokebola = Areas_pokebolas1_2_3[1]
    Número_pokebola = Imagens_pokebolas1_2_3[1]
    entrar()
})
Areas_pokebolas1_2_3[2].addEventListener('mouseenter', function() {
    vali2 = 2
    Aberta_pokebola = Aberta_pokebola1_2_3[2]
    AreaPokebola = Areas_pokebolas1_2_3[2]
    Número_pokebola = Imagens_pokebolas1_2_3[2]
    entrar()
})
Areas_pokebolas1_2_3[0].addEventListener('mouseout', sair)
Areas_pokebolas1_2_3[1].addEventListener('mouseout', sair)
Areas_pokebolas1_2_3[2].addEventListener('mouseout', sair)
Areas_pokebolas1_2_3[0].addEventListener('click', function() {
    vali = 0
    Aberta_pokebola = Aberta_pokebola1_2_3[0]
    clicou()
})
Areas_pokebolas1_2_3[1].addEventListener('click', function() {
    vali = 1
    Aberta_pokebola = Aberta_pokebola1_2_3[1]
    clicou()
})
Areas_pokebolas1_2_3[2].addEventListener('click', function() {
    vali = 2    
    Aberta_pokebola = Aberta_pokebola1_2_3[2]
    clicou()
})
//FUNÇÃO PARA FECHAR QUALQUER POKEBOLA ABERTA
function Fechar_outrasPokebolas() {
    c = -1
    for(let i = 0; i < 3; i++) {
        if(i != vali && Aberta_pokebola1_2_3[i] == 1) {
            c = i
            Aberta_pokebola1_2_3[i] = 0
            n = 1
        }
    }
    if(n == 1) {
        frames = 100
        for(let cont = 1; cont < 13; cont++) {
            setTimeout(function() {
                caixa_pokebolas[c].innerHTML = `<img src="imagens/pokebola_aberta.png" alt="pokebola" id="pokeB${c}">`
                caixa_pokebolas[c].innerHTML += `<img src="Efeito_frames_invertidos/frame${cont}.png" alt="pokebola" id="efeito${c}">`
            }, frames)
            frames+=100
        }
        setTimeout(function() {
            caixa_pokebolas[c].innerHTML = `<img src="imagens/pokebola_entre_aberta.png" alt="pokebola" id="pokeB${c}">`
        }, 1200)
        setTimeout(function() {
            caixa_pokebolas[c].innerHTML = `<img src="imagens/pokebola_fechada.png" alt="pokebola" id="pokeB${c}">`
        }, 1500)   
        var imagem_pokemon = window.document.getElementById(`pokemon${c}`)
        imagem_pokemon.style.animationName = `PokemonSaindo${c}`
        imagem_pokemon.style.animationDuration = '0.5s'
        setTimeout(function() {
            Lugar_pokemons.innerHTML = ''
        }, 500)
    }
}
//ABRIR POKEBOLA
function clicou() {
    frames = 100
    Fechar_outrasPokebolas()
    if(Aberta_pokebola == 0) {
        Número_pokebola.style.animationName = 'PokebolaVoltando'
        Número_pokebola.style.width = '40px'
        Número_pokebola.style.height = '40px'
        Número_pokebola.style.top = '425px'
        setTimeout(function() {
            caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_entre_aberta.png" alt="pokebola" id="pokeB${vali}">`
        }, 300)
        setTimeout(function() {
            caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_aberta.png" alt="pokebola" id="pokeB${vali}">`
        }, 700)
        setTimeout(function() {
            for(let cont = 1; cont < 13; cont++) {
                setTimeout(function() {
                    caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_aberta.png" alt="pokebola" id="pokeB${vali}">`
                    caixa_pokebolas[vali].innerHTML += `<img src="Efeito_frames/frame${cont}.png" alt="pokebola" id="efeito${vali}">`
                }, frames)
                frames+=100
            }
        }, 800)
        //POKEMON
        if(n == 0) {
            MiliSecon = 1500
        }else {
            MiliSecon = 2600
        }
        n = 0
        setTimeout(function() {
            if(vali == 0) {
                Lugar_pokemons.innerHTML = `<img src="imagens/bulbasaur.gif" id="pokemon${vali}">`
            }else if(vali == 1) {
                Lugar_pokemons.innerHTML = `<img src="imagens/charmander.gif" id="pokemon${vali}">`
            }else {
                Lugar_pokemons.innerHTML = `<img src="imagens/squirtle.gif" id="pokemon${vali}">`
            }
            var imagem_pokemon = window.document.getElementById(`pokemon${vali}`)
            imagem_pokemon.style.animationName = `PokemonChamado${vali}`
            imagem_pokemon.style.animationDuration = '1.5s'
            imagem_pokemon.style.width = '80px'
            imagem_pokemon.style.height = '80px'
            imagem_pokemon.style.filter = 'brightness(100%)'
            setTimeout(function() {
                if(vali == 0) {
                    imagem_pokemon.style.top = '515px'
                    imagem_pokemon.style.left = '945px'
                }else if(vali == 1) {
                    imagem_pokemon.style.top = '530px'
                    imagem_pokemon.style.left = '1010px'
                }else {
                    imagem_pokemon.style.top = '525px'
                    imagem_pokemon.style.left = '1070px'
                }
            }, 1300)
        }, MiliSecon)
        if(c == 0 || c == 1 || c == 2) {
            setTimeout(function() {
                caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_aberta.png" alt="pokebola" id="pokeB${vali}">`
            }, 3300)
        }else {
            setTimeout(function() {
                caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_aberta.png" alt="pokebola" id="pokeB${vali}">`
            }, 2100)
        }
        for(let j = 0; j < 3; j++) {
            if(vali == j) {
                Aberta_pokebola1_2_3[vali] = 1
            }
        }
    }else {
        frames = 100
        var imagem_pokemon = window.document.getElementById(`pokemon${vali}`)
        imagem_pokemon.style.animationName = `PokemonSaindo${vali}`
        imagem_pokemon.style.animationDuration = '0.5s'
        setTimeout(function() {
            Lugar_pokemons.innerHTML = ''
        }, 500)
        for(let cont = 1; cont < 13; cont++) {
            setTimeout(function() {
                caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_aberta.png" alt="pokebola" id="pokeB${vali}">`
                caixa_pokebolas[vali].innerHTML += `<img src="Efeito_frames_invertidos/frame${cont}.png" alt="pokebola" id="efeito${vali}">`
            }, frames)
            frames+=100
        }
        setTimeout(function() {
            caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_entre_aberta.png" alt="pokebola" id="pokeB${vali}">`
        }, 1200)
        setTimeout(function() {
            caixa_pokebolas[vali].innerHTML = `<img src="imagens/pokebola_fechada.png" alt="pokebola" id="pokeB${vali}">`
        }, 1500)
        acabou = 1
        for(let j = 0; j < 3; j++) {
            if(vali == j) {
                Aberta_pokebola1_2_3[vali] = 0
            }
        }
    }
}
//ANIMAÇÕES DE ZOOM
function entrar() {
    if(Aberta_pokebola != 1) {
        let pokebola = window.document.getElementById(`pokeB${vali2}`)
        Número_pokebola = pokebola
    }
    AreaPokebola.style.top = '405px'
    AreaPokebola.style.height = '65px'
    Número_pokebola.style.animationName = 'PokebolaZoom'
    Número_pokebola.style.animationDuration = '0.2s'
    Número_pokebola.style.top = '400px'
    Número_pokebola.style.width = '50px'
    Número_pokebola.style.height = '50px'
}
function sair() {
    AreaPokebola.style.top = '420px'
    AreaPokebola.style.height = '50px'
    Número_pokebola.style.animationName = 'PokebolaVoltando'
    Número_pokebola.style.animationDuration = '0.2s'
    Número_pokebola.style.top = '425px'
    Número_pokebola.style.width = '40px'
    Número_pokebola.style.height = '40px' 
}