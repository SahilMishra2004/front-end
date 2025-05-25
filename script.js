document.addEventListener('DOMContentLoaded', function() {
    // Load trending movies
    const trendingMovies = [
        { id: 1, title: 'Black in Action', image: 'https://dnm.nflximg.net/api/v6/ALnfVbMvPhqZAIuQMLkxmdJcXYk/AAAAQYPxOwvSjztxhcGZE0LNrnWvM-S1jJRvg9Hhrgy8QCxws1VyZMBN3_6HHzQKpX27HLEKsydO6AjBB4Jr9eAKqe04mlzp7T482Y6pV1cV9Tcah7yU3nUWd0lza9Y1tEOGYiBMM5qYulY7UiWdhVyoDj86Uu9Yh2aAAgVNPZ7b_eaJ2Z_5qFg52EEhsDoCcJ_5r74-RL55oBN-6hqg4ufXvKj406nuIN2aKDmbRgP1S49uuMcgoZvhn_e_SwqSfY8AkGgWp44ouNOGX-uQzw.jpg?r=3a5' },
        { id: 2, title: 'Masaan', image: 'https://static.beebom.com/wp-content/uploads/2024/04/masaan.jpg?w=500&quality=75' },
        { id: 3, title: 'Drishyam', image: 'https://static.beebom.com/wp-content/uploads/2024/04/drishyam.jpg?w=519&quality=75' },
        { id: 4, title: 'Animal', image: 'https://m.media-amazon.com/images/I/61OmlO9stnL._AC_UF1000,1000_QL80_.jpg' },
        { id: 5, title: 'Dark', image: 'https://m.media-amazon.com/images/I/41Fv9HYZgAL._AC_UF1000,1000_QL80_.jpg' }
    ];

    const trendingContainer = document.getElementById('trending-movies');
    
    trendingMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-number">${movie.id}</div>
        `;
        trendingContainer.appendChild(movieElement);
    });

    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('active');
            
            // Close all answers first
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            // Toggle icons
            document.querySelectorAll('.faq-question i').forEach(icon => {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-plus');
            });
            
            if (!isOpen) {
                answer.classList.add('active');
                question.querySelector('i').classList.remove('fa-plus');
                question.querySelector('i').classList.add('fa-times');
            }
        });
    });

    // Language selector
    const languageSelectors = document.querySelectorAll('.language-selector select');
    languageSelectors.forEach(selector => {
        selector.addEventListener('change', () => {
            // In a real app, this would change the language
            console.log('Language changed to:', selector.value);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Load trending movies
    const trendingMovies = [
        { id: 1, title: 'Black in Action', image: 'https://dnm.nflximg.net/api/v6/ALnfVbMvPhqZAIuQMLkxmdJcXYk/AAAAQYPxOwvSjztxhcGZE0LNrnWvM-S1jJRvg9Hhrgy8QCxws1VyZMBN3_6HHzQKpX27HLEKsydO6AjBB4Jr9eAKqe04mlzp7T482Y6pV1cV9Tcah7yU3nUWd0lza9Y1tEOGYiBMM5qYulY7UiWdhVyoDj86Uu9Yh2aAAgVNPZ7b_eaJ2Z_5qFg52EEhsDoCcJ_5r74-RL55oBN-6hqg4ufXvKj406nuIN2aKDmbRgP1S49uuMcgoZvhn_e_SwqSfY8AkGgWp44ouNOGX-uQzw.jpg?r=3a5' },
        { id: 2, title: 'Masaan', image: 'https://static.beebom.com/wp-content/uploads/2024/04/masaan.jpg?w=500&quality=75' },
        { id: 3, title: 'Drishyam', image: 'https://static.beebom.com/wp-content/uploads/2024/04/drishyam.jpg?w=519&quality=75' },
        { id: 4, title: 'Animal', image: 'https://m.media-amazon.com/images/I/61OmlO9stnL._AC_UF1000,1000_QL80_.jpg' },
        { id: 5, title: 'Dark', image: 'https://m.media-amazon.com/images/I/41Fv9HYZgAL._AC_UF1000,1000_QL80_.jpg' }
    ];

    const trendingContainer = document.getElementById('trending-movies');
    
    trendingMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="movie-number">${movie.id}</div>
        `;
        trendingContainer.appendChild(movieElement);
    });

    // Rest of your existing JavaScript...
});