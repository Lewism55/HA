import React from 'react';
import { Carousel } from 'react-bootstrap';
import { productList } from '../products/mock-data-product';

function CarouselElement() {
    
    // logic here for random generated products

    // or selecting products with the most recent add date?

    // take info from props, either random products or recent ones?

    return(
        <>        
            <Carousel variant="dark" fade>
                <Carousel.Item>
                    <div className="carousel-image-holder">
                        <img
                        className="carousel-image"
                        src={productList[0].productImage1}
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image-holder">

                    <img
                    className="carousel-image"
                    src={productList[0].productImage2}
                    alt="Second slide"
                    /></div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image-holder">

                    <img
                    className="carousel-image"
                    src={productList[0].productImage3}
                    alt="Third slide"
                    />
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselElement;