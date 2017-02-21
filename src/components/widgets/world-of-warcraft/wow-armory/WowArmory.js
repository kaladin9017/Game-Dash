import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';
import { getWowItemDetails, saveWowItem } from '../../../../actions/index';

require('./wowstyles/wowstyle.css');

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

    return (
        <div className="youtubeparentdiv">
        <h1 className="wowheading">Search the Armory- pick your weapon!</h1>
        <hr id="wowhrone" />
        <h3 id="wowsub">Just type to filter your choice and then click on the one you want!</h3>
          <div className="youtubediv">
              <WowArmorySearchBar onSearchTermChange={this.state.searchArmory} />
              <h3 id="wowsub">Your Weapon of choice:</h3>
              <hr id="weaponhr" />
            <center>
              {this.state.itemInfo ? <WowItemDisplay itemInfo={this.state.itemInfo} saveItem={this.saveItem.bind(this)} /> : null}
            </center>
            <center>
            </center>
            <WowArmoryList
              onItemSelect={this.handleSelect.bind(this)}
              items={this.state.items}
            />
            <center><h1 className="savedheading">Your saved weapons <span id="savedarr" className="glyphicon glyphicon-menu-down"></span></h1></center>
            <div className="savedthings">
              <div>
                {savedItems}
              </div>
          </div>
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
