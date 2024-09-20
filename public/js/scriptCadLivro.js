function getMessage(msg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(msg);
}

const msgErroCad = getMessage('errorCad');
const msgSucessCad = getMessage('sucessCad');

if (msgErroCad) {
    alert(decodeURIComponent(msgErroCad));
    window.location.href = '/dashboard';
}

if (msgSucessCad) {
    alert(decodeURIComponent(msgSucessCad));
    window.location.href = '/dashboard';
}