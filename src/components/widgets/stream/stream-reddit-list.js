import React from 'react';

const StreamRedditList = ({article}) => {
  return(
    <ul>
      <li><a href={article.data.url}>{article.data.title}</a></li>
      <li>Up Votes: {article.data.ups} </li>
      <li>created: {new Date(article.data.created*1000).toString()} by: {article.data.author}</li>
      <br/>
    </ul>
  );
};

export default StreamRedditList;
