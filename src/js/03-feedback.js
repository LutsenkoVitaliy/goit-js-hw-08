import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    // textarea: document.querySelector('.feedback-form  textarea'),
    // input: document.querySelector('.feedback-form input')
}

initForm();

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(refs.form);
  formData.forEach(value, name => { console.log(value, name); });
});

refs.form.addEventListener('change', throttle(evt => {
  let getInputForm = localStorage.getItem('feedback-form-state');
  getInputForm = getInputForm ? JSON.parse(getInputForm) : {};
  getInputForm[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(getInputForm));
}),500)

function initForm() {
  let getInputForm = localStorage.getItem('feedback-form-state');
  if (getInputForm) {
    getInputForm = JSON.parse(getInputForm);
    Object.entries(getInputForm).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
})



// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', throttle(onTextareaInput, 500));
// populateTextarea()

// function onTextareaInput() {
//     localStorage.setItem("email", refs.input.value);
//     localStorage.setItem("feedback-form-state", refs.textarea.value);
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();
  
//   evt.currentTarget.reset();
//   localStorage.removeItem();
// }

// function populateTextarea() {
//     const savedMessage = localStorage.getItem("feedback-form-state");
//     const saveMail = localStorage.getItem("email");
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//     }
//     if (saveMail) {
//         refs.input.value = saveMail;
//     }
// }
