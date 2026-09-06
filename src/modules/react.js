import { cargarAplicacion } from "./loader.js";

export async function abrirReact() {
    const urlLocal = "http://localhost:5175/";
    const urlVercel = "https://cardinova-react-supabase-compartido.vercel.app/";

    try {
        // Comprobar si el servidor local está funcionando
        await fetch(urlLocal, {
            method: "GET",
            mode: "no-cors"
        });

        // Si responde, usar localhost
        cargarAplicacion(urlLocal);

    } catch (error) {
        // Si localhost no responde, usar Vercel
        console.log("Servidor local no disponible. Usando Vercel.");
        cargarAplicacion(urlVercel);
    }
}