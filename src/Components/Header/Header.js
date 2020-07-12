import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Navbar, Icon, NavItem } from 'react-materialize';


const Header = ({ isList, onLayoutChange, updateUsers }) => {
    return (
        // <Container fluid className="header">
        //     <Container>
        //         <Row>
        //             <Col lg={{ span: 2, offset: 5 }} md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 3 }}>
        //                 <h2 className="header__title">Bit People</h2>
        //             </Col>
        //             <Col className="header__icons" lg={{ span: 2, offset: 3 }} md={{ span: 1, offset: 2 }} sm={{ span: 1, offset: 4 }}>
        //                 <i className="fa fa-refresh header__icon" onClick={updateUsers}></i>
        //                 {isList
        //                     ? <i className="fa fa-th-large header__icon" onClick={onLayoutChange}></i>
        //                     : <i className="fa fa-list header__icon" onClick={onLayoutChange}></i>
        //                 }
        //             </Col>
        //         </Row>
        //     </Container>
        // </Container>


        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo">React People</a>}
            centerChildren
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem onClick={updateUsers}>
                <i className='fa fa-refresh'></i>
            </NavItem>
            <NavItem>
                {isList
                    ? <i className="fa fa-th-large" onClick={onLayoutChange}></i>
                    : <i className="fa fa-list" onClick={onLayoutChange}></i>
                }
            </NavItem>
        </Navbar>


    )
}

Header.propTypes = {
    isList: PropTypes.bool,
    onLayoutChange: PropTypes.func.isRequired
};
Header.defaultProps = {
    isList: true
};

export { Header };