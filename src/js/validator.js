import IMask from 'imask';

const validator = () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const tel = document.getElementById('tel');

    const mask = new IMask(tel, {
        mask: "+{7}(000)000-00-00",
      });

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const telValue = tel.value.trim();

        if(usernameValue === '') {
            setError(username, 'Username is required');
        } else if(usernameValue.length <= 2) {
            setError(username, 'Введите больше двух символов')
        }else {
            setSuccess(username);
        }

        if(telValue === '') {
            setError(tel, 'Телефон обязателен')
        } else if (telValue.length !== 16) {
            setError(tel, 'Введите полный номер')
        } else {
            setSuccess(tel);
        }
    };
}

export default validator;