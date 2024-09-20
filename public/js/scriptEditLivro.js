function getMessage(msg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(msg);
}

const msgErroAlt = getMessage('errorAlt');
const msgSucessAlt = getMessage('successAlt');

if (msgErroAlt) {
    alert(decodeURIComponent(msgErroAlt));
    window.location.href = '/listarLivros';
}

if (msgSucessAlt) {
    alert(decodeURIComponent(msgSucessAlt));
    window.location.href = '/listarLivros';
}
