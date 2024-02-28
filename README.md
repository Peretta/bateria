# Documentação do Código

O código fornecido é um script JavaScript que lida com eventos de teclado e reproduz sons associados a teclas específicas. Abaixo estão os detalhes da implementação:

## Evento de Teclado

O código utiliza o método `addEventListener` para detectar eventos de teclado (`keyup`). Quando uma tecla é pressionada, a função `playSound` é chamada, recebendo o código da tecla como parâmetro.

```javascript
document.body.addEventListener('keyup', (event) => {    
    playSound(event.code.toLowerCase()); //recebe a tecla
});
```
Botão do Compositor
-------------------

Além do evento de teclado, o script também reage a cliques em um botão associado a um compositor. Quando o botão é clicado, a função `playComposition` é chamada, reproduzindo uma composição baseada em uma sequência de caracteres fornecida pelo usuário

```javascript
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});
```

Função `playSound`
------------------

A função `playSound` reproduz um som associado à tecla pressionada. Ela também adiciona uma classe de destaque à div correspondente à tecla pressionada, criando um efeito visual.
```javascript
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play(); //toca a música
    }
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}
```

Função playComposition
------------------
A função playComposition reproduz uma composição fornecida como uma matriz de caracteres. Cada caractere é associado a uma tecla específica.

```javascript
function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait +=250;
    }
}
```
Esse script proporciona uma experiência interativa de reprodução de sons associados às teclas e também permite a execução de composições predefinidas.
