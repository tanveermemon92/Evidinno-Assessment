const natural = require('natural');

function transformQuery(query) {
    // Tokenize the query
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(query);

    // Stemming and removing stop words
    const stemmer = natural.PorterStemmer;
    const stopwords = new Set(natural.stopwords);
    const filteredTokens = tokens.filter(token => !stopwords.has(token.toLowerCase())).map(token => stemmer.stem(token));

    // Construct search query
    const searchQuery = filteredTokens.join(' ');

    return searchQuery;
}
const axios = require('axios');

const apiKey = 'e3ecf275275745beadaed928bd1c6aad'; // Replace with your NewsAPI key
const apiUrl = 'https://newsapi.org/v2/everything';

async function searchNews(query) {
    const transformedQuery = transformQuery(query);
    const params = {
        q: transformedQuery,
        apiKey: apiKey,
        language: 'en',
        sortBy: 'publishedAt'
    };

    try {
        const response = await axios.get(apiUrl, { params });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}
