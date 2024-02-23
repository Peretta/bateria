document.body.addEventListener('keyup', (event) => {    
    
    playSound(event.code.toLowerCase()); //recebe a tecla

});

document.querySelector('.composer button').addEventListener('click', ()=>{

    let song = document.querySelector('#input').value;
    
    if(song !== ''){

        let songArray = song.split('');
        playComposition(songArray);
    
    }
});



function playSound(sound){

    let audioElement = document.querySelector(`#s_${sound}`); //guarda a tecla 
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); //seleciona a div da tecla
    
    if(audioElement) { //identifica se o áudio daquela tecla existe
        audioElement.currentTime = 0;
        audioElement.play(); //toca a música
    }
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{

            keyElement.classList.remove('active')

        }, 300)
    }

}
function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            
            playSound(`key${songItem}`);

        }, wait);
        wait +=250;

    }
}