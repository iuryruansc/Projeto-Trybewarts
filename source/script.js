const validation = () => {
    const email = document.querySelector('#login').value;
    const pass = document.querySelector('#password').value;
    const passTest = "123456";
    const emailTest = "tryber@teste.com";

    if (email === emailTest && pass === passTest) {
        alert("Olá, Tryber!");
    } else {
        alert("Email ou senha inválidos");
    }
}

const enableSubmit = () => {
  submitBtn.disabled = !agreeCheck.checked;
}

const textCount = () => {
  const contador = document.querySelector('#counter');
  const text = comment.value;

  contador.innerHTML = `${500-text.length}`
}

const comment = document.querySelector('#textarea');
comment.addEventListener('input', textCount)

const submitBtn = document.querySelector('#submit-btn');

const agreeCheck = document.querySelector('#agreement')
agreeCheck.addEventListener('click', enableSubmit);

const loginBtn = document.querySelector('#submit-login');
loginBtn.addEventListener('click', validation);

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()