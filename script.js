function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    /*outra opção de fazer
    if(body.classList.contains('light')){
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }*/


    /*subtituir a img 
    const img = document.querySelector("#profile img")
    
    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png")
    }
    else{
        img.setAttribute("src", "./assets/avatar.png")
    }*/
}