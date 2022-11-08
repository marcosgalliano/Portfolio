window.addEventListener("scroll", () => {
    //SKILLS
    let animacion = document.getElementById("skills");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    //EDUCATION
    let animacion2 = document.getElementById("education");
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    //CONTACT
    let animacion3 = document.getElementById("contact");
    let posicionObj3 = animacion3.getBoundingClientRect().top;
    //PANTALLA
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'efecto 2s ease-out'
    }

    if(posicionObj2 < tamañoDePantalla){
        animacion2.style.animation = 'efecto 2s ease-out'
    }

    if(posicionObj3 < tamañoDePantalla){
        animacion3.style.animation = 'efecto 2s ease-out'
    }
})