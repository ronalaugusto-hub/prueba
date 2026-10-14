// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js"


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

//Capturar u obtener el html
const formulario = document.getElementById('formClientes');
const btnEnviar = document.getElementById('btn-enviar');
const mostrarMensaje = document.getElementById('mostrar_mensaje');

formulario.addEventListener('submit', async function (event) {

    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;


    try {

        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;

        await addDoc(collection(db, 'solicitudes'), {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fecha: serverTimestamp()
        });

        mostrarMensaje.textContent = 'Solicitud enviada correctamente';
        formulario.reset();

    } catch (error) {
        console.error('Error al guardar:', error)
        mostrarMensaje.textContent = 'Error al enviar el mensaje';
    } finally {
        btnEnviar.textContent = 'Enviar mensaje';
        btnEnviar.disabled = false;
    }
});
