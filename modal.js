const modal = () => {

    const modalBtn = document.querySelector('.modal__button')
    const modal = document.querySelector('.modal')

    modalBtn.addEventListener('click', () => {

        modal.style.display = 'flex'
    });

    /*modal.addEventListener('click', (event)=>{
       const modalContent = event.target.closest('.modal__inner')
    
       if (!modalContent) {
    
    modal.style.display = ''
       }
        
    });*/


    // Créer l'élément de la croix
    const closeButton = document.createElement('span');
    closeButton.className = 'modal__close';
    closeButton.innerHTML = '&times;'; // Symbole "✕"

    // Ajouter la croix au formulaire (dans le header)
    const modalHeader = modal.querySelector('.modal__inner');
    modalHeader.appendChild(closeButton);

    // Ajouter un événement pour fermer le formulaire au clic sur la croix
    closeButton.addEventListener('click', () => {
        modal.style.display = ''; // Masquer le formulaire
    });
}

modal()