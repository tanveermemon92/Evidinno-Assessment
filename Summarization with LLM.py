pip install transformers
from transformers import GPT2Tokenizer, GPT2LMHeadModel

# Load pre-trained GPT model and tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2-medium")
model = GPT2LMHeadModel.from_pretrained("gpt2-medium", return_dict=True)
def generate_summary(text, max_length=150):
    inputs = tokenizer.encode("summarize: " + text, return_tensors="pt", max_length=max_length, truncation=True)
    summary_ids = model.generate(inputs, max_length=max_length, min_length=50, length_penalty=2.0, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary
# Update search function to include summarization
async def search():
    query = get_user_query()  # Implement this function to get user query
    articles = await searchNews(query)

    articles = sortSearchResults(query, articles)
    articles = filterSearchResults(query, articles)

    for article in articles:
        summary = generate_summary(article['content'])  # Assuming 'content' key contains full article text
        display_article_with_summary(article, summary)  # Implement this function to display article with summary in UI
      <!-- HTML Code -->
```html
<!-- Example UI Element: Expandable Card -->
<div class="card">
    <div class="card-header">
        Article Title
    </div>
    <div class="card-body">
        <p>Summary: Brief summary of the article</p>
        <button onclick="expandSummary()">Read more</button> <!-- Implement JavaScript function to expand summary -->
        <div class="full-summary">
            <!-- Full summary displayed here when expanded -->
        </div>
    </div>
</div>
