import { Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './nav-bar';
import HomePage from './home-page';
import ProductHome from './products/product-home';
import ProductPage from './products/product-page';
import BlogPage from './blog/blog-page';
import Footer from './footer';
import './styles/styles.css';
import BlogList from './blog/blog-list';


function Main() {
    return(
        <>
            <div className='header-section'>
                <a href='/' ><div className='header-text'>His Attire</div></a>
                <NavBar className='nav-bar'></NavBar>
            </div>
            <div className='main-section'>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/blog_list' element={<BlogList />} />
                    <Route path='/blog_list/blog' element={<BlogPage />} />
                    <Route exact path='/products' element={<ProductHome />} />
                    <Route path='/products/product' element={<ProductPage />} />
                </Routes>
            </div>
            <div className='footer-section'>
                <Footer />
            </div>
        </>
    )
}

export default Main;