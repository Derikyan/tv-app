import './selectedMovie.scss';
import play from '../../assets/icons/play-icon.webp';
import { useEffect, useState } from 'react';

const SelectedMovie = ({film}) => {
  const formattedDuration = `${Math.floor(parseInt(film.Duration) / 60 / 60)}h ${Math.floor(parseInt(film.Duration) / 60 % 60)}m`;
  const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  
  const [imagePath, setImagePath] = useState(film);
  const [isPlay, setIsPlay] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const module = await import(`../../assets/${film.CoverImage}`);
        const module2 = await import(`../../assets/${film.TitleImage}`);
        setImagePath([module.default, module2.default]);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImage();
    if(firstLoad){
      setFirstLoad(false);
    }else{
      setTimeout(()=>{
        setIsPlay(true);
      },2000)
    }
  }, [film]);

  return (
    <div className='selectedMovie' style={{backgroundImage: `url("${imagePath[0]}")`}}>
      <div className="selectedMovieBox">
        <span className='selectedTitle'>Movie</span>
        <img src={imagePath[1]} alt="featuredTitleImage" />
        <span className="details">
          <span className="releaseYear">{film.ReleaseYear}</span>
          <span className="mpaRating">{film.MpaRating}</span>
          <span className="duration">{formattedDuration}</span>
        </span>
        <p className="description">
          {lorem}
        </p>
        <div className="buttons">
          <button className="button">
            <img src={play} alt="play" />
            Play
          </button>
          <button className="button buttonMore">More Info</button>
        </div>
        <span className='trending'>Trending now</span>
      </div>
      {isPlay ? 
      <div className="video-container">
        <video autoPlay className="video-bg" onEnded={()=>{setIsPlay(false)}}>
          <source src={film.VideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      :
      ''
      }
    </div>
  )
}

export default SelectedMovie