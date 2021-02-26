import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from "../pages";
import ErrorMessage from '../errorMessage';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import "./app.css";

export default class App extends React.Component {
    state = {
        isRandomCharEnable: true,
        isError: false,
    }

    onRandomCharToggle = () => {
        this.setState(state => ({
            isRandomCharEnable: !state.isRandomCharEnable
        }))
    }
    render = () => {
        const {isRandomCharEnable, isError} = this.state;

        if (isError) {
            return (<ErrorMessage/>)
        }

        const randomChar = isRandomCharEnable ? <RandomChar/> : null;

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomChar}
                                <button className="random-char-toggle" onClick={this.onRandomCharToggle}>Toggle Random character</button>
                            </Col>
                        </Row>
                        
                        <Switch>
                            <Route path="/" exact render={() => <h1 className="color-white">Главная страница</h1>}/>
                            <Route path="/characters/" component={CharacterPage}/>
                            <Route path="/books/"  exact component={BooksPage}/>
                            <Route path="/books/:id" exact render={
                                ({match}) => {
                                    const {id} = match.params;

                                    return <BooksItem bookId={id}/>
                                }
                            }/>
                            <Route path="/houses/"  component={HousesPage}/>
                            <Route path="*" render={
                                () => (
                                    <>
                                        <h1 className="color-white">Такой страницы нет</h1>
                                        <Link to="/">На главную</Link>
                                    </>)
                            }/>
                        </Switch>                  
                    </Container>
                </div>
            </Router>
            
    )}
}