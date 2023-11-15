import './selectedMovie.scss';
import featuredCoverImage from '../../assets/FeaturedCoverImage.png';
import featuredTitleImage from '../../assets/FeaturedTitleImage.png';
import play from '../../assets/icons/play-icon.webp';

const SelectedMovie = () => {
  const ReleaseYear = "2021";
  const MpaRating = "18+";
  const Duration = "6000";
  const formattedDuration = `${Math.floor(parseInt(Duration) / 60 / 60)}h ${parseInt(Duration) / 60 % 60}min`;
  const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  
  return (
    <div className='selectedMovie' style={{backgroundImage: `url("${featuredCoverImage}")`}}>
      <span className='selectedTitle'>Movie</span>
      <img src={featuredTitleImage} alt="featuredTitleImage" />
      <span className="details">
        <span className="releaseYear">{ReleaseYear}</span>
        <span className="mpaRating">{MpaRating}</span>
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
    </div>
  )
}

export default SelectedMovie