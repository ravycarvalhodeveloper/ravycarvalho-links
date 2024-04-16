let botao = document.querySelector("#botao");
botao.addEventListener('click',  () => {
    let html = document.querySelector("html");
    html.classList.toggle("light")
})