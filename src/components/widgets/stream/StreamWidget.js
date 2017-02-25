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

  componentDidMount() {
    if(this.props.redditCode) {
      this.setState({ code: this.props.redditCode });
    }
  }

  handleRequest() {
    this.props.getRedditAccessToken(this.props.redditCode);
  }
  handleArticlesRequest() {
    this.props.getSubReddit(this.props.reddit.access_token, this.props.reddit.token_type);
  }

  // getDate(date) {
  //   return moment(time*1000).format('YYYY-MM-DD HH:mm:ss');
  // }


  render() {

    if (this.props.redditCode && !this.props.reddit.access_token) {
      this.handleRequest();
    }
    if (this.props.reddit.access_token && this.props.reddit.articles.length < 1) {
      this.handleArticlesRequest();
    }

    if (this.props.reddit.articles.length < 1 || !this.props.reddit.access_token) {
      return(
        <div>
          <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REDDIT_CLIENT_ID}&response_type=code&state=GAME_DASH&redirect_uri=http://localhost:8000/twitch&duration=temporary&scope=read`} >
              Auth Me
            </a>
            <button onClick={this.handleRequest.bind(this)}>Click</button>
        </div>
      );
    }
    else {
      let articles = this.props.reddit.articles.map((val) => {
        return (<StreamRedditList key={val.data.id} article={val} />);
      });
      return (
        <div>{articles}</div>
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
