// Desarrollado por Carlos Jimenez, Contacto +56984318381
function adjustTextarea(textarea) {//auto ajusta el texto. 

    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}
document.addEventListener('DOMContentLoaded', function() { // autofocus para el textarea 
    const textarea = document.getElementById('text_user');
    if (textarea) {
        textarea.focus();
    }
});

function validarEntrada(event) { //valida que solo contenga minúsculas de lo contrario genera una alerta y no deja escribir 

    const textarea = event.target;
    const texto = textarea.value;
    const regex = /^[a-z ]*$/; // Solo letras minúsculas
    if (!regex.test(texto)) {
        alert('Solo se permiten letras minusculas. ');
        textarea.value = texto.replace(/[^a-z]/g, ''); // Eliminar caracteres inválidos
    }
}

// Selecciona el textArea
const textarea = document.getElementById('text_user');

// Añade el evento de input para validar la entrada
textarea.addEventListener('input', validarEntrada);

// Función para encriptar el texto 
function encriptar_texto() {


    const texto_usuario = textarea.value;
    if (texto_usuario === '') {//valido que el texarea no este vacia. 
        alert('He validado que no ha ingresado texto. Por favor, ingrese texto.');
        return;
    }
    const mapaVocales = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = '';

    for (let i = 0; i < texto_usuario.length; i++) {
        let char = texto_usuario[i];
        textoEncriptado += mapaVocales[char] || char;
    }


    const rectangulo = document.querySelector('.rectangulo');// pongo el texto encriptado y genero un boton de copiado.
    rectangulo.innerHTML = `
        <p class="presentacion__texto">${textoEncriptado}</p>
        <button class="presentacion__enlaces__copiar">Copiar</button>
    `;

    const copiarButton = document.querySelector('.presentacion__enlaces__copiar'); //genero una alerta una vez que el boton esta copiado.
    copiarButton.addEventListener('click', function () {
        navigator.clipboard.writeText(textoEncriptado).then(function () {
            alert('Texto copiado al portapapeles');
        }).catch(function (error) {
            alert('Error al copiar el texto: ' + error);
        });
    });

}
//función para desencriptar el texto 
function desencriptar_texto() {
    const textoEncriptado = textarea.value;

    if (textoEncriptado === '') {
        alert('He validado que no ha ingresado texto. Por favor, ingrese texto.');
        return;
    }
    const mapaDesencriptar = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = textoEncriptado;

    for (const [encriptado, desencriptado] of Object.entries(mapaDesencriptar)) {
        const regex = new RegExp(encriptado, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, desencriptado);
    }

    const rectangulo = document.querySelector('.rectangulo');
    rectangulo.innerHTML = `
        <p class="presentacion__texto">${textoDesencriptado}</p>
        <button class="presentacion__enlaces__copiar">Copiar</button>
    `;

    const copiarButton = document.querySelector('.presentacion__enlaces__copiar');
    copiarButton.addEventListener('click', function () {
        navigator.clipboard.writeText(textoDesencriptado).then(function () {
            alert('Texto copiado al portapapeles');
        }).catch(function (error) {
            alert('Error al copiar el texto: ' + error);
        });
    });
}
//Sé cuándo el botón encriptar es pinchado  
document.addEventListener('DOMContentLoaded', function () {
    const desencriptarButton = document.querySelector('.presentacion__enlaces__desencriptador');
    desencriptarButton.addEventListener('click', desencriptar_texto);
});


// Selecciona el botón y añade el evento de clic 
const encriptarButton = document.querySelector('.presentacion__enlaces__encriptador');
encriptarButton.addEventListener('click', encriptar_texto);
