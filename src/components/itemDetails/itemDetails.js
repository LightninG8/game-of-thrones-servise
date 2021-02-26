import React, {Component} from 'react';
import './itemDetails.css';

// import LoadingSpinner from "../loadingSpinner";
import GotService from "../../services/gotService";
import LoadingSpinner from "../loadingSpinner";
import ErrorMessage from "../errorMessage";

const Field = ({item, field, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

export default class ItemDetails extends Component {
    state = {
        item: null,
        isLoading: false,
        isError: false
    }

    gotService = new GotService();

    componentDidMount = () => {
        this.updateItem();
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }
    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            isLoading: false,
        })
    }
    onError = () => {
        this.setState({
            item: null,
            isError: true,
        })
    }
    updateItem() {
        const {itemId, getData} = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            isLoading: true,
        })
        getData(itemId)
            .then(this.onItemDetailsLoaded)
            .catch(() => this.onError());
            
    }
    render() {
        const {item, isError, isLoading} = this.state;

        if (!item && isError) {
            return (<ErrorMessage/>)
        } else if (!item && !isLoading) {
            return (<span className="select-error">Please select an item</span>)
        }

        if (isLoading) {
            return (
                <div className="char-details rounded">
                    <LoadingSpinner/>
                </div>
            )
                
            
        }



        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}