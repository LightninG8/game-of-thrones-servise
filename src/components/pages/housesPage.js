import React from "react";


import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotService from "../../services/gotService";

import RowBlock from "../rowBlock";

export default class HousesPage extends React.Component {
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
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name}`}/>
        );

        const itemDetails = (
            <ItemDetails 
                itemId={selectedItem}
                getData={this.gotService.getHouse}
            >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        );
        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}