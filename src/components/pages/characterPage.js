import React from "react";


import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotService from "../../services/gotService";

import RowBlock from "../rowBlock";

export default class CharacterPage extends React.Component {
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
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}/>
        );

        const itemDetails = (
            <ItemDetails 
                itemId={selectedItem}
                getData={this.gotService.getCharacter}
            >
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born"/>
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture"/>
            </ItemDetails>
        );
        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}