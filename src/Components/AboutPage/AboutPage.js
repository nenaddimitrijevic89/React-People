import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container, Row } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <h1>About</h1>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export { AboutPage };