console.log("Script loaded successfully!");
function adjustTextarea(textarea) {
    console.log("entre al modificar tamaño");
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}