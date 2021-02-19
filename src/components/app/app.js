import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
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

                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}