let gElBody = document.querySelector('body')

function toggleModal(title = false) {
    gElBody.classList.toggle('modal-open')
    const elTitle = document.querySelector('.modal-title');
    console.log(elTitle)
    if (title) elTitle.innerText = title
}


