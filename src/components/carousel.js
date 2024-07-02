import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import honda_civic from '../assets/images/honda_civic.jpg';
import honda_crv from '../assets/images/honda_crv.jpg';
import honda_typer from '../assets/images/honda_typer.jpeg';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
    padding-top: 50px;
    margin: 0 auto;
    max-width: 600px;

    @media (max-width: 480px)
    display: none;
`;

const CarouselImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <CarouselWrapper>
            <Slider { ...settings }>
                <div>
                    <CarouselImage src={ honda_civic } alt="Car 1"/>
                </div>
                <div>
                    <CarouselImage src={ honda_crv } alt="Car 2"/>
                </div>
                <div>
                    <CarouselImage src={ honda_typer } alt="Car 3"/>
                </div>
            </Slider>
        </CarouselWrapper>
    );
};

export default Carousel;
