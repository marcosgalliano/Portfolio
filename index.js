window.addEventListener("scroll", () => {
    //SKILLS
    let animacion = document.getElementById("skillsx");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    //EDUCATION
    let animacion2 = document.getElementById("educationx");
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    //PANTALLA
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'efectoh1X2 1.2s ease-out'
    }

    if(posicionObj2 < tamañoDePantalla){
        animacion2.style.animation = 'efecto 2.5s ease-out'
    }
})