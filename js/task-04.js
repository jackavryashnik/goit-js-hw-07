const validateForm = event => {
  event.preventDefault();
  if (!form.email.value || !form.password.value || form.password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else if (form.email.value.trim() && form.password.value.trim()) {
    const formData = {
      email: form.email.value.trim(),
      password: form.password.value.trim(),
    };
    console.log(formData);

    form.reset();
  }
};

const form = document.querySelector('.login-form');
form.addEventListener('submit', validateForm);
