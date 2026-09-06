import { cargarAplicacion } from "./loader.js";

export async function abrirFarmacias() {
    const urlLocal = "http://localhost:4200/";
    const urlVercel = "https://cardinova-farmacias-v2-8up2.vercel.app/";

    try {
        await fetch(urlLocal, {
            method: "GET",
            mode: "no-cors"
        });

        // Si localhost está disponible
        cargarAplicacion(urlLocal);

    } catch (error) {
        // Si localhost no está disponible, usar Vercel
        console.log("Servidor local no disponible. Usando Vercel.");
        cargarAplicacion(urlVercel);
    }
}