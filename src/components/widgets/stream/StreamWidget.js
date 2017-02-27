import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getRedditAccessToken, getSubReddit } from '../../../actions/index';
import axios from 'axios';
import moment from 'moment';
import StreamRedditList from './stream-reddit-list';

class StreamWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {code : ''};
  }

  // handleArticlesRequest() {
  //   this.props.getSubReddit(this.props.reddit.access_token, this.props.reddit.token_type);
  // }
  componentDidMount() {
    this.props.getSubReddit(this.props.reddit.access_token, this.props.reddit.token_type);
  }

  render() {

    if (this.props.reddit.articles.length < 1 || !this.props.reddit.access_token) {
      return(
        <div>
          <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_REDDIT_CLIENT_ID}&response_type=code&state=GAME_DASH&redirect_uri=http://localhost:8000&duration=temporary&scope=read`} >
              Auth Me
            </a>
        </div>
      );
    }
    else {
      let articles = this.props.reddit.articles.map((val) => {
        return (<StreamRedditList key={val.data.id} article={val} />);
      });
      return (
        <div className="panel panel-info">
          <div className="panel-heading-fixed">
              <h3 className="panel-title">
                Gamer News
              </h3>
          </div>
          <div className="panel-body">
              <ul className="media-list">
                {articles}
              </ul>
          </div>
        </div>
  );
    }


  }

}
function mapStateToProps(state) {
  return {
    reddit : state.reddit
  };
}

export default connect(mapStateToProps, { getRedditAccessToken, getSubReddit })(StreamWidget);
