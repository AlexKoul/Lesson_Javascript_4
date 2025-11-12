const accordeon = () => {

    const contents = document.querySelectorAll('.program-line__content');

    contents.forEach((elem) => {
        const title = elem.querySelector('.program-line__title');
        const descr = elem.querySelector('.program-line__descr');

        title.addEventListener('click', () => {
            // Supprimer la classe 'active' de tous les éléments
            document.querySelectorAll('.program-line__descr').forEach((d) => {
                d.classList.remove('active');
            });

            // Ajouter la classe 'active' uniquement à l'élément cliqué
            descr.classList.add('active');
        });
    });
}

accordeon()