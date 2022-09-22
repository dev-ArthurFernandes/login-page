function makeModal(){
    
    const modalContainer     = document.createElement('section')
    const modalContent       = document.createElement('div')
    const modalHeader        = document.createElement('div')
    const modalTitle         = document.createElement('h2')
    const modalText          = document.createElement('p')
    const modalInput         = document.createElement('input')
    const modalButton        = document.createElement('button')
    const modalCloseButton   = document.createElement('button')

    modalContainer.className = 'bg-color-black w-full h-full flex flex-justify flex-item position-fixed'
    modalContainer.id        = 'modalContainer'

    modalContent.className   = 'bg-color-grey-6 w-popUp h-popUp flex flex-justify flex-item flex-col border-radius flex-justify-between'

    modalHeader.className    = 'w-full flex flex-row flex-justify-between paddin-left paddin'

    modalTitle.innerText     = 'Recupere sua senha'
    modalTitle.className     = 'h2'

    modalCloseButton.id        = 'CloseButton'
    modalCloseButton.innerText = 'X'
    modalCloseButton.className = 'border-radius-100  close-size pointer'

    modalText.innerText      = 'Para recuperar a senha do usuário, por favor insira o e-mail cadastrado abaixo.'
    modalText.className      = 'text text-modal w-half'

    modalInput.className     = 'input'
    modalInput.placeholder   = 'E-mail'

    modalButton.innerText    = 'Redefinir senha'
    modalButton.className    = 'button bg-color-grey-3 border-radius margin-bottom'

    modalHeader.append(modalTitle, modalCloseButton)
    modalContent.append(modalHeader, modalText, modalInput, modalButton)
    modalContainer.append(modalContent)
    
    return modalContainer
}

function showModal(){
    const register = document.getElementById("registrar")
    const container = document.getElementById("container")

    register.addEventListener('click', () => {
        let modal = makeModal()
        container.append(modal)
        closeModal()
    })
}

function closeModal(){
    const modal = document.getElementById("modalContainer")
    const closeButton = document.getElementById("CloseButton")

    closeButton.addEventListener('click', () => {
        modal.remove()
    })
}

showModal()