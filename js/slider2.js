(function(){

    const sliders = [...document.querySelectorAll('.testimonio__body')];
    const buttonNext = document.querySelector('#Siguiente');
    const buttonBefore = document.querySelector('#Anterior');
    let value;
    
    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });
    
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });
    
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimonio__body--show').dataset.id;
        value = Number(currentTestimony);
        value+=add;
    
        sliders[Number(currentTestimony)-1].classList.remove('testimonio__body--show')
    
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
    
        sliders[value-1].classList.add('testimonio__body--show')
    }
    
    })();