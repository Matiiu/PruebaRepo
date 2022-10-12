const data = {
    nombre: '',
    email: '',
    mensaje: ''
}
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', readText);

email.addEventListener('input', readText);

mensaje.addEventListener('input', readText);

function readText(e) {
    data[e.target.id] = e.target.value;
}
let form = document.querySelector('.formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //Validar el formulario
    let { nombre, email, mensaje } = data

    if (nombre === '' || email === '' || mensaje === '') {
        showAlert('Error, All fields are required', true);
        return
    }
    showAlert('The data is correct');  
})

function showAlert(message, error = null) {
    let alert = document.createElement('P')
    alert.textContent = message

    if (error) {
        alert.classList.add('error')
    }
    else {
        alert.classList.add('rigth')
    }
    form.append(alert);
    setTimeout(() => {
        alert.remove()
    }, 5000);
}




