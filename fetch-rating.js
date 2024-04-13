const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes',
    params: { actor: 'Al Pacino' },
    headers: {
        Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
        'X-RapidAPI-Key': 'ace3fb97d4msh88b3a8a5b40327cp1ec578jsn8b896fef69b7',
        'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com'
    }
};

axios.request(options)
    .then(function (response) {
        // Process the response data
        const movieQuotes = response.data;
        console.log(movieQuotes);

        // Extract movie rating details from the data
        movieQuotes.forEach(quote => {
            console.log(`Movie: ${quote.movie}`);
            console.log(`Quote: ${quote.quote}`);
        });
    })
    .catch(function (error) {
        console.error(error);
    });
