import React, { useEffect, useState, useRef } from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.scss';

const Carousel = ({ films, changeMovie }) => {
  const [imagePaths, setImagePaths] = useState([]);
  const isMouseDownRef = useRef(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const loadImagePaths = async () => {
      const paths = await Promise.all(
        films.map(async (item) => {
          const module = await import(`../../assets/${item.CoverImage}`);
          return module.default;
        })
      );
      setImagePaths(paths);
    };

    loadImagePaths();
  }, [films]);

  const handleItemClick = (filmId) => {
    if (!isMouseDownRef.current) {
      changeMovie(filmId);
    }
  };

  return (
    <>
      <MultiCarousel
        responsive={responsive}
        additionalTransfrom={0}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        beforeChange={() => (isMouseDownRef.current = true)}
        afterChange={() => (isMouseDownRef.current = false)}
      >
        {films.map((film, index) => (
          <div
            className='carouselItem'
            key={film.Id}
            onClick={() => handleItemClick(film.Id)}
            style={{ backgroundImage: `url(${imagePaths[index]})` }}
          ></div>
        ))}
      </MultiCarousel>
    </>
  );
};

export default Carousel;