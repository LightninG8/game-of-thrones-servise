import React, {useState, useEffect} from 'react';
import './itemList.css';

import LoadingSpinner from "../loadingSpinner";

export default function ItemList({getData, onItemSelected, itemId, renderItem}) {

    const [itemList, setList] = useState([]);    

    useEffect(() => {
        getData()
            .then(itemList => {
                setList(itemList);
            });
    }, []);

    const renderItems = (arr) => {
        return arr.map((item, i) => {
            const {id} = item;

            const label = renderItem(item);

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

    if (!itemList) {
        return (
            <ul className="item-list list-group">
               <LoadingSpinner/> 
            </ul>
        );
            
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}