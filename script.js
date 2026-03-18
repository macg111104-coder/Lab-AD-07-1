//obtener formulario
const form = document.getElementById("contactForm");

// Obtener mensaje de repospuesta
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e){
    //evita que la pagina se recargue
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const elmail = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    //validacion simple
    if(nombre === "" || elmail=== "" || mensaje === ""){
        respuesta.style.color = "red";
        respuesta.textContent = "Por favor complete todos los campos";
        return;
    }
    //Mensaje exitoso
    respuesta.style = "green"
    respuesta.textContent = "Mensaje enviado correctamente";

    form.reset();
});

