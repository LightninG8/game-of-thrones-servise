import React, {Component} from 'react';
import './itemList.css';

import LoadingSpinner from "../loadingSpinner";


export default class ItemList extends Component {
    state = {
        itemList: null,
        activeChar: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems = (arr) => {
        const {onItemSelected, itemId} = this.props;

        return arr.map((item, i) => {
            const {id} = item;

            const label = this.props.renderItem(item);

            let className = "list-group-item";
            
            className += id === itemId ? " active-char-item" : "";

            return (
                <li 
                    key={i}
                    className={className}
                    onClick={() => {onItemSelected(id);}}>
                    {label}
                </li>
                )    
        });
    }
    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <LoadingSpinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}