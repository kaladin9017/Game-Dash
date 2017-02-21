import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';
import { getWowItemDetails, saveWowItem } from '../../../../actions/index';

// ALGOLIA
const ALGOLIA_SEARCH_ONLY_KEY = process.env.ALGOLIA_SEARCH_ONLY_KEY;
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY);
const index = client.initIndex('WoWArmory');
//

import WowArmorySearchBar from './WowArmorySearchBar';
import WowArmoryList from './WowArmoryList';
import WowItemDisplay from './WowItemDisplay';
import SavedItems from './SavedItems';

class WowArmory extends Component {
  constructor (props) {
    super (props);

    this.state = {itemInfo: null, items: [], searchArmory: _.debounce((term) => {this.armorySearch(term);}, 500)};
    this.armorySearch(this.props.search);
  }

  handleSelect(item) {

    let that =this;
    this.props.getWowItemDetails(item.entry)
      .then(() => {
        this.setState({selectedItem: item, itemInfo: this.props.wowArmory});
      });
  }
  saveItem() {
    this.props.saveWowItem(this.props.wowArmory);
  }

  armorySearch(term) {
    let that = this;
    index.search(term, function searchDone(err, content) {
      if (err) {
        throw(err);
      }
      that.setState({items: content.hits, selectedItem: content.hits[0]});
    });

  }

  render() {
    let savedItems = this.props.wowSavedItems.map((val,idx) => (<SavedItems itemInfo={val} key={idx} /> ));
    console.log(savedItems)
    return (
        <div className="youtubeparentdiv">
          <div className="youtubediv">
            <center>
              <WowArmorySearchBar onSearchTermChange={this.state.searchArmory} />
            </center>
            <center>
              {this.state.itemInfo ? <WowItemDisplay itemInfo={this.state.itemInfo} saveItem={this.saveItem.bind(this)} /> : null}
            </center>
            <center>
            </center>
            <WowArmoryList
              onItemSelect={this.handleSelect.bind(this)}
              items={this.state.items}
            />
          </div>
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    wowArmory: state.wowArmory,
    wowSavedItems: state.wowSavedItems
  };
}


export default connect(mapStateToProps, { getWowItemDetails, saveWowItem })(WowArmory);


// 0 - Poor
// 1 - Common
// 2 - Uncommon
// 3 - Rare
// 4 - Epic
// 5 - Legendary
// 6 - Artifact
// 7 - Heirloom
// 8 - WoW Token
//
// use item API - finds info on item
// use quest API - finds quest level and quest giver and location
