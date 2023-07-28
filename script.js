const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', validaFormulario);

function validaFormulario(e) {
    e.preventDefault(); 

    document.querySelector('.sucess').style.display = 'none';
    document.querySelector('.error').style.display = 'none';

    const numeroA = parseInt(document.getElementById('numeroA').value);
    const numeroB = parseInt(document.getElementById('numeroB').value);

    if (numeroB > numeroA) {
      document.querySelector('.sucess').style.display = 'block';
    } else {
        document.querySelector('.error').style.display = 'block';
    }
}


