const validateForm = event => {
  event.preventDefault();
  if (!form.email.value || !form.password.value) {
    alert('All form fields must be filled in');
  } else {
    const arr = {
      email: form.email.value.trim(),
      password: form.password.value.trim(),
    };
    console.log(arr);

    form.reset();
  }
};

const form = document.querySelector('.login-form');
form.addEventListener('submit', validateForm);
