import { cargarAplicacion } from "./loader.js";

export async function abrirVue() {
    const urlLocal = "http://localhost:5174/";
    const urlVercel = "https://cardinova-cita.vercel.app/";

    try {
        await fetch(urlLocal, {
            method: "GET",
            mode: "no-cors"
        });

        // Si Vue está funcionando en local
        cargarAplicacion(urlLocal);

    } catch (error) {
        // Si localhost no está disponible, usar Vercel
        console.log("Servidor local de Vue no disponible. Usando Vercel.");
        cargarAplicacion(urlVercel);
    }
}