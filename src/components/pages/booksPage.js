import React from "react";


import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotService from "../../services/gotService";

import RowBlock from "../rowBlock";

export default class BooksPage extends React.Component {
    state = {
        selectedItem: null
    }

    gotService = new GotService();

    onItemSelected = (id) => {       
        this.setState({
            selectedItem: id,
        })
    }

    render() {
        const {selectedItem} = this.state;

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected} 
                itemId={selectedItem} 
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name}`}/>
        );

        const itemDetails = (
            <ItemDetails 
                itemId={selectedItem}
                getData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}