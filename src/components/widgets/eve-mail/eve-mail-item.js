import React, {Component} from 'react';

class EveMailItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Subject: {this.props.subject}</h3>
        <br/>
        <h3>Sender:  {this.props.from}</h3>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: this.props.body}}></div>
        <br/>
        <button onClick={this.props.backButton}>Back</button>
      </div>
    );
  }
}

export default EveMailItem;
