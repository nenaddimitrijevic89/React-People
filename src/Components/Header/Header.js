import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';
import { Navbar, Icon, NavItem } from 'react-materialize';


const Header = ({ isList, onLayoutChange, updateUsers }) => {
    return (
        <Navbar
            className={style.header}
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