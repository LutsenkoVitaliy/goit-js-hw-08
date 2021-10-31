import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form input')
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onTextareaInput, 500));
populateTextarea()

function onTextareaInput() {
    localStorage.setItem("email", refs.input.value);
    localStorage.setItem("feedback-form-state", refs.textarea.value);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log("email", refs.input.value);
  console.log("message", refs.textarea.value);
  evt.currentTarget.reset();
  localStorage.removeItem();
}

function populateTextarea() {
    const savedMessage = localStorage.getItem("feedback-form-state");
    const saveMail = localStorage.getItem("email");
  if (savedMessage) {
    refs.textarea.value = savedMessage;
    }
    if (saveMail) {
        refs.input.value = saveMail;
    }
}