import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {setPage} from '../actions/index';
import basket from './assets/cart.png'

function NavBar() {
    const dispatch = useDispatch();

    return(
        <>
            <Navbar bg="white" expand="sm">
            <Container fluid>
                <Navbar.Brand href='/' onClick={() => {dispatch(setPage('home'))}} className='logo'>LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='nav-bar-items'>
                <Nav
                    className="my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavDropdown title="Fashion" id="navbarScrollingDropdown">
                        <NavDropdown.Item href='/products' onClick={() => {dispatch(setPage('product'))}}>Buy</NavDropdown.Item>
                        <NavDropdown.Item href='/products' onClick={() => {dispatch(setPage('product'))}}>Rent</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/products' onClick={() => {dispatch(setPage('product'))}}>
                            Inspire Me!
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="navbarScrollingDropdown">
                        <NavDropdown.Item href='/blog_list' onClick={() => {dispatch(setPage('blog'))}}>Blog Posts</NavDropdown.Item>
                        <NavDropdown.Item href='/blog_list' onClick={() => {dispatch(setPage('blog'))}}>Top 10's</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/blog_list' onClick={() => {dispatch(setPage('blog'))}}>
                            Request a blog!
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href='/' onClick={() => {dispatch(setPage('home'))}}><img className='basket-icon' src={basket} /></Navbar.Brand>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar;