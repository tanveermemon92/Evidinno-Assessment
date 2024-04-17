Medical Drug Information Retrieval Tool
Overview
This repository contains the code for a prototype tool designed to retrieve comprehensive information about medical drugs, including competitor drugs and the latest news. The tool is built using JavaScript and Node.js, and it utilizes various libraries and APIs for API integration, information indexing, and summarization.

Features
User Interface (UI) Design and Implementation:

Implemented a simple and user-friendly UI with HTML, CSS, and JavaScript.
Designed an input field for queries and a button to initiate the search.
Displayed summarized results clearly and concisely on the UI.
API Integration for News Search:

Integrated the NewsAPI for searching medical news articles.
Implemented query transformation logic to convert natural language queries into effective search queries for the API.
Information Indexing and Relevance Filtering:

Designed an indexing mechanism to organize search results based on relevance to the query.
Implemented filtering logic to exclude irrelevant information from the search results.
Summarization with a Large Language Model (LLM):

Integrated the Hugging Face Transformers library to generate summaries of indexed information.
Utilized a pre-trained GPT model for summarization, ensuring the summary is directly relevant to the user's query.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/evidinno-assessment.git
Navigate to the project directory:
bash
Copy code
cd evidinno-assessment
Install dependencies:
bash
Copy code
npm install
Usage
Start the server:
bash
Copy code
npm start
Open your web browser and go to http://localhost:3000 to access the UI.
Enter your query and click the search button to retrieve drug information and news articles.
Libraries and Packages Used
Node.js
Express.js
Axios
Hugging Face Transformers
NewsAPI
License
This project is licensed under the MIT License.
