import { useEffect, useState } from 'react';
import './carousel.scss';
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = ({films, changeMovie}) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  
  const [imagePaths, setImagePaths] = useState([]);

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

  return (
    <>
      <MultiCarousel responsive={responsive}>
        {films.map((film,index) => {
          return (
            <div className='carouselItem' key={Math.floor() * film.id} 
              onClick={() => changeMovie(film.Id)}
              style={{ backgroundImage: `url(${imagePaths[index]})` }}>
            </div>
            )
        })}
      </MultiCarousel>
    </>
  )
}

export default Carousel