// Function to transform natural language query into search query
function transformQuery(query) {
    // Tokenize the query
    const tokens = query.toLowerCase().split(' ');

    // Remove stop words
    const stopWords = new Set(['what', 'are', 'the', 'to', 'and', 'or', 'if', 'they', 'did', 'in', 'their', 'for', 'were', 'used']);
    const filteredTokens = tokens.filter(token => !stopWords.has(token));

    // Construct search query
    const searchQuery = filteredTokens.join(' ');

    return searchQuery;
}
const axios = require('axios');

// Function to search news articles using NewsAPI
async function searchNews(query) {
    const apiKey = 'e3ecf275275745beadaed928bd1c6aad'; // Replace 'YOUR_API_KEY' with your NewsAPI key
    const apiUrl = 'https://newsapi.org/v2/everything';

    // Transform the query
    const transformedQuery = transformQuery(query);

    try {
        // Make GET request to NewsAPI
        const response = await axios.get(apiUrl, {
            params: {
                q: transformedQuery,
                apiKey: apiKey,
                language: 'en',
                sortBy: 'publishedAt'
            }
        });

        // Return articles
        return response.data.articles;
    } catch (error) {
        console.error('Error searching news:', error);
        return [];
    }
}

