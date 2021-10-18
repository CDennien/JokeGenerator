function generateJoke() {
    createPopup();
    document.getElementById('generate-button').disabled = 'true';
}

function createPopup() {
    const popup = document.createElement('div');
    const popup_close = document.createElement('div');
    const popup_content = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = 'Your Mum Joke';

    popup_close.classList.add('popup-close');
    popup_close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';

    popup_content.classList.add('popup-content');
    popup_content.innerHTML = 'SYSTEM ERROR: Your Mum Is Too Big To Process';

    setTimeout(function () {
        appendPopup();
        const icon = document.getElementById('icon');
        icon.src = 'assets/Icon-Glint.png';
    }, 500);

    function closePopup() {
        popup.remove();
    }
    
    function appendPopup() {
        document.getElementById('background').appendChild(popup);
        popup.appendChild(popup_close);
        popup.appendChild(popup_content);
        popup_close.onmousedown = closePopup;
    }
}

