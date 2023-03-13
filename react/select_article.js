// You are working on a React app that displays a list of articles. Each article has a title, summary, and image. When the user clicks on an article, a modal should open displaying the full article content. Write a React component that fetches the article data from an API and displays the articles. The component should allow users to click on an article and display the full article content in a modal.

import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err));
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleModalClose = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      <h1>Article List</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2 onClick={() => handleArticleClick(article)}>{article.title}</h2>
          <p>{article.summary}</p>
          <img src={article.image} alt={article.title} />
        </div>
      ))}
      {selectedArticle && (
        <Modal onClose={handleModalClose}>
          <h2>{selectedArticle.title}</h2>
          <img src={selectedArticle.image} alt={selectedArticle.title} />
          <p>{selectedArticle.content}</p>
        </Modal>
      )}
    </div>
  );
}

export default ArticleList;
