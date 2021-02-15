import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import "./app.css";

import GotService from '../../services/gotService';


const App = () => {
    const service = new GotService();

    service.getAllBooks()
        .then(res => {
            res.forEach(item => {
                console.log(item.name);
            })
        });

    return (
        <div className="app"> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
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
    );
};

export default App;