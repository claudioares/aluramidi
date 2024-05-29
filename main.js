const buttons = document.querySelectorAll('button.tecla');


buttons.forEach(button => {
    button.addEventListener("click", ()=>{

        const buttonName = button.className.split(' ')[2];
        const sounds = document.querySelectorAll('audio');

        sounds.forEach(sound => {
            const soundName = sound.id;

            if(soundName === buttonName){
                sound.play();
            }
        })
    })
})

document.addEventListener('keydown', (event) => {
    const sounds = document.querySelectorAll('audio');
    const keyButton = event.key;

        sounds.forEach((sound, index) => {

            if(Number(keyButton) === (index + 1)){
                buttons.forEach((button, indexButton)=>{
                    if(indexButton === index) {
                        button.classList.add("ativa")
                        sound.play();
                        setTimeout(()=>{
                            button.classList.remove("ativa")
                        }, 300)
                    }
                })
            }
        })
  });
  