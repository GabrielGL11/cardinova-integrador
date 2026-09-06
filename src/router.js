import { abrirReact } from "./modules/react.js";
import { abrirVue } from "./modules/vue.js";
import { abrirFarmacias } from "./modules/angular.js";

const app = document.querySelector("#app");

export function cargarModulo(nombre) {

    switch(nombre) {

        case "agendamiento":
            abrirReact();
        break;

        case "citas":
            abrirVue();
        break;

        case "farmacias":
            abrirFarmacias();
        break;

        case "admin":
            window.location.href =
                "http://localhost:4200/admin";
        break;

        default:
            app.innerHTML = `
                <h2>Bienvenido a Cardinova</h2>
                <p>Sistema Integrado de Gestión Médica</p>
            `;
    }
}