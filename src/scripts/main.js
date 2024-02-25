document.addEventListener('DOMContentLoaded',function(){
    
    const iconHome = document.getElementById('home-icon');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    console.log(alturaHero);

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaElementosHeader();
            iconHome.style.display = 'none'
            console.log('ocultou homeIcon')
        }
        else {
            exibeElementosHeader();
            iconHome.style.display = 'block'
            console.log('mostrou homeIcon')
        }
        
    })
})

function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}