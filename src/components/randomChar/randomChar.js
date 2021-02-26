import React, {useState, useEffect} from 'react';
import './randomChar.css';

import LoadingSpinner from "../loadingSpinner";
import GotService from "../../services/gotService";
import ErrorMessage from "../errorMessage";

export default function RandomChar(props) {
    const [state, setState] = useState({
        character: {},
        isLoading: true,
        isError: false,
    });

    let updateCharacterTimer;

    useEffect(() => {
        updateCharacter();
        updateCharacterTimer = setInterval(updateCharacter, 5000);

        return () => {
            clearInterval(updateCharacterTimer);
        }
    }, []);

    const gotService = new GotService();

    const onCharacterLoaded = character => {
        setState(state => ({
            ...state, 
            character, 
            isLoading: false}
        ));
    }
    const onError = () => {
        setState(state => ({
            ...state, 
            isError: true,
            isLoading: false}
        ));
    }
    const updateCharacter = () => {
        const id = Math.round(Math.random() * 1000);

        gotService.getCharacter(id)
            .then(onCharacterLoaded)
            .catch(onError);
    }
    

    const { character, isLoading, isError } = state;

    const errorMessage = isError ? <ErrorMessage/> : null;
    const loadingSpinner = isLoading ? <LoadingSpinner/> : null;
    const content = !(isLoading || isError) ? <View character={character}/> : null;

    return (
        <div className="random-block rounded">
            {errorMessage}
            {loadingSpinner}
            {content}
        </div>
    );
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