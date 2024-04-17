# Medical Drug Information Retrieval Tool
# Overview
This repository contains the code for a prototype tool designed to retrieve comprehensive information about medical drugs, including competitor drugs and the latest news. The tool is built using JavaScript and Node.js, and it utilizes various libraries and APIs for API integration, information indexing, and summarization.

# Features

# User Interface (UI) Design and Implementation:
1. Implemented a simple and user-friendly UI with HTML, CSS, and JavaScript.
2. Designed an input field for queries and a button to initiate the search.
3. Displayed summarized results clearly and concisely on the UI.

# API Integration for News Search:
1. Integrated the NewsAPI for searching medical news articles.
2 . Implemented query transformation logic to convert natural language queries into effective search queries for the API.

# Information Indexing and Relevance Filtering:

1. Designed an indexing mechanism to organize search results based on relevance to the query.
2. Implemented filtering logic to exclude irrelevant information from the search results.

# Summarization with a Large Language Model (LLM):
1. Integrated the Hugging Face Transformers library to generate summaries of indexed information.
2. Utilized a pre-trained GPT model for summarization, ensuring the summary is directly relevant to the user's query.

# Installation
1. Clone the repository
git clone https://github.com/your-username/evidinno-assessment.git
2. Navigate to the project directory
cd evidinno-assessment
3. Install Dependencies
npm install

# Dependencies Used
Node.js
Express.js
Axios
Hugging Face Transformers
NewsAPI

# Usage
1. Start the Server:
npm start
2. Open your web browser and go to http://localhost:3000 to access the UI.
3. Enter your query and click the search button to retrieve drug information and news articles.

# Contribution
Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or bug fixes.
Make sure to replace `your-username` and `your-repository` with your actual GitHub username and repository name. Additionally, include a `LICENSE` file in your repository with the appropriate license text.

# License
This project is licensed under the MIT License.
