import { supabase } from "./supabase.js";

export async function login(correo, contrasena) {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('correo', correo)
        .eq('contrasena', contrasena)
        .single();

    if (error || !data) {
        return null;
    }

    localStorage.setItem(
        'usuario',
        JSON.stringify('usuario')
    );
    
    console.log("Usuario guardado:", data);

    return data;
}

export function obtenerUsuario() {
    return JSON.parse(
        localStorage.getItem('usuario')
    );
}

export function logout() {
    localStorage.removeItem('usuario');
}