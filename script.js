const form = document.getElementById('form-num');
const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
let numeroEValido = false;


function validaNumero(a, b) {
    const numeroA = Number(a.value);
    const numeroB = Number(b.value);

    return numeroB > numeroA; 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const containerMsgValidacao = document.querySelector('.validacao');
    const containerMsgOk = document.querySelector('.ok')
    const msgNumValido = 'Certo! B > A.';
    const msgNumInvalido = 'O número precisa ser menor!';
    
    numeroEValido = validaNumero(numA, numB);
    if (numeroEValido) {
        containerMsgOk.innerHTML = msgNumValido;
        containerMsgOk.style.display = 'flex';
        containerMsgValidacao.style.display = 'none';
        numA.value = '';
        numB.value = '';
    } else {
        containerMsgValidacao.innerHTML = msgNumInvalido;
        containerMsgValidacao.style.display = 'block';
        containerMsgOk.style.display = 'none';
    }
})





