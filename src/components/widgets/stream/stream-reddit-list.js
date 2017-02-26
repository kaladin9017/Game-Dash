import React from 'react';

const StreamRedditList = ({article}) => {
  return(
      <li className="media">
          <div className="media-body">
              <h4 className="media-heading">
                              <a href={article.data.url} className="text-info">
                                {article.data.title}
                              </a>
                          </h4>
              <p className="margin-top-10 margin-bottom-20">
                 created: {new Date(article.data.created*1000).toString()} by: {article.data.author} | upVotes: {article.data.ups}
              </p>
          </div>
      </li>
  );
};

export default StreamRedditList;
