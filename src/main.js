import { cargarModulo } from "./router.js";
import {login, obtenerUsuario, logout} from "./auth.js";


const usuarioGuardado = obtenerUsuario();

if (usuarioGuardado) {
    mostrarMenu(usuarioGuardado);
}

const btnLogin = document.querySelector("#btn-login");
if (btnLogin) {
    btnLogin.addEventListener("click", async () => {

        const correo =
            document.querySelector("#correo").value;

        const contrasena =
            document.querySelector("#contrasena").value;

        const usuario =
            await login(correo, contrasena);

        if (!usuario) {
            document.querySelector("#mensaje")
                .textContent =
                "Credenciales incorrectas";
            return;
        }
        mostrarMenu(usuario);
    });
}

function mostrarMenu(usuario) {
    localStorage.setItem( "usuario", JSON.stringify(usuario));

    document.querySelector("#menu").style.display = "flex";

    document.querySelector("#logout-btn")
        .style.display = "block";

    document.querySelector("#app").innerHTML = `
        <h2>
            Bienvenido ${usuario.nombre} ${usuario.apellido}
        </h2>

        <p>
            <strong>Rol:</strong> ${usuario.rol}
        </p>

        <p>
            <strong>Correo:</strong> ${usuario.correo}
        </p>

        <hr>

        <p>
            Seleccione un módulo desde el menú superior.
        </p>
    `;

    if (usuario.rol === "medico") {

        document.querySelector("#admin-btn")
            .style.display = "block";

        document.querySelector("#citas")
            .style.display = "block";

    } else {

        document.querySelector("#admin-btn")
            .style.display = "none";

        document.querySelector("#citas")
            .style.display = "none";
    }
}


document.querySelector("#logout-btn")
?.addEventListener("click", () => {

    logout();
    location.reload();

});

document.querySelector("#admin-btn")
?.addEventListener("click", () => {

    cargarModulo("admin");

});

document.querySelector("#agendamiento")
?.addEventListener("click", () => {
    const usuario = obtenerUsuario();
    if(!usuario){
        alert("Debe iniciar sesión");
        return;
    }
    cargarModulo("agendamiento");
});

document.querySelector("#citas")
?.addEventListener("click", () => {

    cargarModulo("citas");

});

document.querySelector("#farmacias")
?.addEventListener("click", () => {

    cargarModulo("farmacias");

});