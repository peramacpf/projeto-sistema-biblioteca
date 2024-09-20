document.getElementById('cad').addEventListener('submit', function(event){

    let senha = document.getElementById('senha').value;
    let confSenha = document.getElementById('confSenha').value;

    if (senha !== confSenha) {
        alert("As senhas informadas são diferentes!");
        event.preventDefault();
    }
});

function getMessage(msg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(msg);
}

const msgErroCad = getMessage('errorCad');
const msgSucessCad = getMessage('sucessCad');

if (msgErroCad) {
    alert(decodeURIComponent(msgErroCad));
    window.location.href = '/login';
}

if (msgSucessCad) {
    alert(decodeURIComponent(msgSucessCad));
    window.location.href = '/login';
}