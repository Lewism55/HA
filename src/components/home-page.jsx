import React from 'react';
import CarouselElement from './carousel/carousel-element';
import wideImg from './assets/wide-image-suit.jpg';

function HomePage() {
    return(
        <>        
            <div className="homepage-initial-section">
                <div>
                New 
                <br />
                Attire
                </div>
                <CarouselElement />
            </div>
            <div className="homepage-blog-section">
                <div className="homepage-sideways-text">Sideways Slogan</div>
                <div className="homepage-article-image"><img src={wideImg} height='150px' width="250px" /></div>
                <div className="homepage-article-image"><img src={wideImg} height='150px' width="250px" /></div>
            </div>
            <div className="homepage-carousel">
                <CarouselElement />
            </div>
            <div className="homepage-article-image"><img src={wideImg} height='300px' width="500px" /></div>
            <div className="homepage-section-1">
                <CarouselElement />
            </div>
            <div className="homepage-blog-section">
                <div className="homepage-sideways-text">Sideways Slogan</div>
                <div className="homepage-article-image"><img src={wideImg} height='150px' width="250px" /></div>
                <div className="homepage-article-image"><img src={wideImg} height='150px' width="250px" /></div>
            </div>
            <div>
                <CarouselElement />
            </div>
        </>
    )
}

export default HomePage;