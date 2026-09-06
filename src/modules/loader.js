export function cargarAplicacion(url) {

    const app = document.querySelector("#app");


    app.innerHTML = `
        <iframe 
            src="${url}"
            width="100%"
            height="700px"
            frameborder="0">
        </iframe>
    `;

}