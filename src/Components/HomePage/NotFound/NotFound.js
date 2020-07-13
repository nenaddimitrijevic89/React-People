import React from 'react';
import notFound from '../../../Images/not_found.png';
import { Container, Row, Col } from 'react-bootstrap';
import style from './NotFound.module.css';


const NotFound = () => {
    return (
        <Container className={style.sticky}>
            <Row>
                <Col>
                    <img src={notFound}></img>
                </Col>
            </Row>
        </Container>

    )
}

export { NotFound };