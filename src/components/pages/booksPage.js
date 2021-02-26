import React from "react";

import ItemList from '../itemList';
import GotService from "../../services/gotService";
import {withRouter} from "react-router-dom";

class BooksPage extends React.Component {
    state = {
        selectedItem: null
    }

    gotService = new GotService();

    render() {
        const {selectedItem} = this.state;

        return (
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId);
                }} 
                itemId={selectedItem} 
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name}`}/>
        )
    }
}

export default withRouter(BooksPage);