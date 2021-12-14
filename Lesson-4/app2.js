var form = document.forms.regform;
var btnNextEx = document.getElementById('next');
var boxNextEx = document.getElementsByClassName('box-next');

var textBefore = document.getElementById('before-text');
var textAfter = document.getElementById('after-text');

var openNextEx = () => {
    form.style.display = 'none';
    boxNextEx[0].style.display = 'block';

};

var changeText = () => {
    let str = textBefore.textContent;
    console.log(str);

    textAfter.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');

};