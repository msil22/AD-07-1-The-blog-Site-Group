document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    let nombre = document.querySelector("input[name='nombre']").value;
    let correo = document.querySelector("input[name='correo']").value;
    let mensaje = document.querySelector("input[name='mensaje']").value;
  
    // Enviar el correo electrónico
    let email = new Email({
      to: "tu@email.com",
      subject: "Mensaje de contacto",
      body: `
        De: ${nombre}
        Correo electrónico: ${correo}
        Mensaje:
        ${mensaje}
      `,
    });
    email.send();
  
    // Mostrar un mensaje de confirmación
    alert("¡Mensaje enviado con éxito!");
  });
  