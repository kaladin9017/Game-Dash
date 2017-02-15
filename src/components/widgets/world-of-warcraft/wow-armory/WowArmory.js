import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';
import _ from 'lodash';
import axios from 'axios';

// ALGOLIA
const ALGOLIA_SEARCH_ONLY_KEY = process.env.ALGOLIA_SEARCH_ONLY_KEY;
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY);
const index = client.initIndex('WoWArmory');
//

import WowArmorySearchBar from './WowArmorySearchBar';
import WowArmoryList from './WowArmoryList';
import WowItemDisplay from './WowItemDisplay';


class WowArmory extends Component {
  constructor (props) {
    super (props);

    this.state = {items: [], searchArmory: _.debounce((term) => {this.armorySearch(term);}, 500)};
    this.armorySearch(this.props.search);
  }

  handleSelect(item) {
    let that =this;
    axios.get(`https://us.api.battle.net/wow/item/${item.entry}?locale=en_US&apikey=${process.env.WOW_API_KEY}`)
      .then((response) => {
        this.setState({selectedItem: item, itemInfo: response.data});
      });
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
    return(
        <div className="youtubeparentdiv">
          <div className="youtubediv">
            <center>
              <WowArmorySearchBar onSearchTermChange={this.state.searchArmory} />
            </center>
            <center>
              <div className="youtubevideodiv">
                <WowItemDisplay itemInfo={this.state.itemInfo} item={this.state.selectedItem}/>
              </div>
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




export default WowArmory;


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
