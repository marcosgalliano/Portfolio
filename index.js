window.addEventListener("scroll", () => {
    //ABOUT ME
    let animacion = document.getElementById("aboutMex");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    //SKILLS
    let animacion2 = document.getElementById("skillsx");
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    //EDUCATION
    let animacion3 = document.getElementById("educationx");
    let posicionObj3 = animacion3.getBoundingClientRect
    //PANTALLA
    let tamañoDePantalla = window.innerHeight/3.5;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'efecto 2s ease-out'
    }

    if(posicionObj2 < tamañoDePantalla){
        animacion2.style.animation = 'efecto 2s ease-out'
    }
})