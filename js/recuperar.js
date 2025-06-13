document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // evitar que el formulario se envíe y recargue la página
  
      Swal.fire({
        title: "CAMPOS INCOMPLETOS",
        text: "Completa los campos antes de continuar",
        icon: "error"
      });
    });
  });