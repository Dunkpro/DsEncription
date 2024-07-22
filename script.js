
function adjustTextarea(textarea) {
    
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function validarEntrada(event) {
    const textarea = event.target;
    const texto = textarea.value;
    const regex = /^[a-z ]*$/; // Solo letras minúsculas

    if (!regex.test(texto)) {
        alert('Solo se permiten letras minusculas. ');
        textarea.value = texto.replace(/[^a-z]/g, ''); // Eliminar caracteres inválidos
    }
}

// Selecciona el textarea
const textarea = document.getElementById('text_user');

// Añade el evento de input para validar la entrada
textarea.addEventListener('input', validarEntrada);

// Función para encriptar el texto
function encriptar_texto() {
    
    const texto_usuario = textarea.value;

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

    //console.log (textoEncriptado);
    const rectangulo = document.querySelector('.rectangulo');
    rectangulo.innerHTML = `
        <p class="presentacion__texto">${textoEncriptado}</p>
        <button class="presentacion__enlaces__copiar">Copiar</button>
    `;

    const copiarButton = document.querySelector('.presentacion__enlaces__copiar');
    copiarButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textoEncriptado).then(function() {
            alert('Texto copiado al portapapeles');
        }).catch(function(error) {
            alert('Error al copiar el texto: ' + error);
        });
    });
   
}

// Selecciona el botón y añade el evento de clic
const encriptarButton = document.querySelector('.presentacion__enlaces__encriptador');
encriptarButton.addEventListener('click', encriptar_texto);
