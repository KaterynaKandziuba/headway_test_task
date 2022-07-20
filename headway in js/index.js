(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const allCategoriesCard = document.querySelector('#select-all');
        const categoryCards = document.querySelectorAll('.category:not(#select-all)');
        const bookImages = document.querySelectorAll('.books>img');
        
        categoryCards.forEach(card => {
            const cardText = card.innerText;
            const category = cardText.toLowerCase().replace(' & ', '-').replace(' ', '-') + '-book';
            const cardBooks = [];

            bookImages.forEach(bookImg => {
                if(isBookCategory(bookImg, category)) {
                    cardBooks.push(bookImg);
                }
            });

            card.addEventListener('click', function(){
                if(allCategoriesCard.classList.contains('selected')){
                    allCategoriesCard.classList.remove('selected')
                    fadeBooks(bookImages);
                }

                if(!card.classList.contains('selected')){
                    card.classList.add('selected');
                    selectCategoryBooks(card, category, bookImages);
                }
                else {
                    card.classList.remove('selected');
                    fadeBooks(cardBooks);
                }
            }, false);
        })

        allCategoriesCard.addEventListener('click', function (e){
            // playing with this
            if (!this.classList.contains('selected')) {
                this.classList.add('selected');
                categoryCards.forEach(card => card.classList.remove('selected'));
                bookImages.forEach(book => book.classList.remove('faded'));
            } 
            else if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                categoryCards.forEach(card => card.classList.remove('selected'));
                fadeBooks(bookImages);
            }
        }, false);
    })

    function isBookCategory(book, categoryName) {
        return book.classList.contains(categoryName) ? true : false;
    }

    function selectCategoryBooks(categoryElement, categoryName, bookImages) {
        if (categoryElement.classList.contains('selected')) {
            bookImages.forEach(book => {
                if (isBookCategory(book, categoryName)) {
                    book.classList.remove('faded');
                }
            })
        }
    }

    function fadeBooks(books) {
        books.forEach(bookImg => {
            bookImg.classList.add('faded');
        });
    }
})()