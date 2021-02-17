import React, {Component} from 'react';
import './randomChar.css';

import LoadingSpinner from "../loadingSpinner";
import GotService from "../../services/gotService";


export default class RandomChar extends Component {
    constructor() {
        super();

        this.updateCharacter();
    }
    state = {
        character: {},
        isLoading: true,
        isError: false,
    }

    gotService = new GotService();

    onCharacterLoaded = character => {
        this.setState({
            character,
            isLoading: false});
    }
    onError = () => {
        this.setState({
            error: true,
            isLoading: false
        })
    }
    updateCharacter = () => {
        // const id = Math.round(Math.random() * 100);
        const id = 140000;

        this.gotService.getCharacter(id)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    }
    
    render = () => {
        const { character, isLoading } = this.state;

        const content = isLoading ? <LoadingSpinner/> : <View character={character}/>;

        return (
            <div className="random-block rounded">
                {content}
            </div>
        );
    }
}

function View({character}) {
    const {name, gender, born, died, culture} = character;

    return (
        <>
        <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}