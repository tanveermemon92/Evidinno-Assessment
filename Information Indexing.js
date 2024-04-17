// Function to calculate relevance score for search results
function calculateRelevance(query, article) {
    const keywords = query.toLowerCase().split(' ');
    const titleWords = article.title.toLowerCase().split(' ');
    const descriptionWords = article.description.toLowerCase().split(' ');

    // Calculate keyword match score
    const titleMatchScore = keywords.reduce((score, keyword) => {
        return score + titleWords.filter(word => word.includes(keyword)).length;
    }, 0);

    const descriptionMatchScore = keywords.reduce((score, keyword) => {
        return score + descriptionWords.filter(word => word.includes(keyword)).length;
    }, 0);

    // Calculate publication date score (newer articles have higher score)
    const publicationDateScore = (new Date().getTime() - new Date(article.publishedAt).getTime()) / (1000 * 60 * 60 * 24);

    // Calculate total relevance score
    const totalScore = titleMatchScore + descriptionMatchScore + publicationDateScore;

    return totalScore;
}

// Function to sort search results by relevance
function sortSearchResults(query, articles) {
    return articles.sort((a, b) => calculateRelevance(query, b) - calculateRelevance(query, a));
}
// Function to filter search results by relevance and other criteria
function filterSearchResults(query, articles) {
    const filteredResults = articles.filter(article => {
        // Exclude articles with low relevance scores
        if (calculateRelevance(query, article) < 1) {
            return false;
        }

        // Exclude articles with no matching keywords
        const keywords = query.toLowerCase().split(' ');
        const titleWords = article.title.toLowerCase().split(' ');
        const descriptionWords = article.description.toLowerCase().split(' ');

        const containsKeyword = keywords.some(keyword => {
            return titleWords.includes(keyword) || descriptionWords.includes(keyword);
        });

        return containsKeyword;
    });

    return filteredResults;
}
// Update search function to include sorting and filtering
async function search() {
    const query = document.getElementById('queryInput').value;

    // Search news articles
    let articles = await searchNews(query);

    // Sort articles by relevance
    articles = sortSearchResults(query, articles);

    // Filter articles by relevance and other criteria
    articles = filterSearchResults(query, articles);

    // Display filtered articles in UI
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    articles.forEach(article => {
        // Display article in UI
    });
}
