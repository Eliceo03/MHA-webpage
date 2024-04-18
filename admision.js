document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('product-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        form.querySelectorAll('input').forEach(input => {
            if (!input.value) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            showMessage('Registro exitoso', '#00bd00');
            form.reset();
        } else {
            showMessage('Llene todos los campos', '#c40000');
        }
    });

    function showMessage(message, color) {
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        messageBox.style.backgroundColor = color;
        messageBox.style.color = 'white';
        messageBox.style.padding = '10px';
        messageBox.style.textAlign = 'center';
        messageBox.style.marginTop = '15px';
        messageBox.style.borderRadius = '5px';
        messageBox.style.position = 'fixed';
        messageBox.style.top = '0';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translateX(-50%)';
        messageBox.style.zIndex = '99999';
        messageBox.style.width = '100%';

        document.body.appendChild(messageBox);

        setTimeout(function() {
            messageBox.remove();
        }, 3000);
    }
});
