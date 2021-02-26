import React from "react";

import ItemDetails, {Field} from '../itemDetails';
import GotService from "../../services/gotService";

export default class BooksItem extends React.Component{
    gotService = new GotService();

    render() {
        const {bookId} = this.props;

        return (
            <ItemDetails 
                itemId={bookId}
                getData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
    }
}