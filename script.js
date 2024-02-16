function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const homeStatus = document.getElementById('homeStatus').value.trim();
    const residenceType = document.getElementById('residenceType').value.trim();
    const fence = document.getElementById('fence').value.trim();

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    let isValid = true;

    if (name === '') {
        errorMessages.innerHTML += '<p>Please enter your name.</p>';
        isValid = false;
    }

    if (!isValidEmail(email)) {
        errorMessages.innerHTML += '<p>Please enter a valid email address.</p>';
        isValid = false;
    }

    if (!isValidPhone(phone)) {
        errorMessages.innerHTML += '<p>Please enter a valid phone number.</p>';
        isValid = false;
    }

    if (homeStatus === '') {
        errorMessages.innerHTML += '<p>Please provide information about your current home status.</p>';
        isValid = false;
    }

    if (residenceType === '') {
        errorMessages.innerHTML += '<p>Please specify your residence type.</p>';
        isValid = false;
    }

    if (fence === '') {
        errorMessages.innerHTML += '<p>Please select whether you have a fence or not.</p>';
        isValid = false;
    }

    if (isValid) {
        // Submit the form or perform any other action here
        alert('Form submitted successfully!');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
