import './menu.scss';

import userImage from '../../assets/userImage.jpg';

import search from '../../assets/icons/ICON - Search.png';
import home from '../../assets/icons/Group 46.png';
import tvShows from '../../assets/icons/Group 56.png';
import movies from '../../assets/icons/Group 54.png';
import genres from '../../assets/icons/Group 53.png';
import watchLater from '../../assets/icons/Group 47.png';

const Menu = () => {
  return (
    <nav className='menu'>
      <div className='menuShadow' />
      <div className='menuContent'>
        <div className='menuTop'>
          <div className='userContent'>
            <img src={userImage} alt='user-image' />
            <h3>Armen</h3>
          </div>
          <div className='navigationButtons'>
            <div className='navigationButton'>
              <div className='menuIcon'>
                <div className='menuIconBack' />
                <img src={search} alt='search' />
              </div>
              <h2>Search</h2>
            </div>
            <div className='navigationButton active'>
              <div className='menuIcon'>
                <div className='menuIconBack' />
                <img src={home} alt='tv-shows' />
              </div>
              <h2>Home</h2>
            </div>
            <div className='navigationButton'>
              <div className='menuIcon'>
                <div className='menuIconBack' />
                <img src={tvShows} alt='search' />
              </div>
              <h2>TV Shows</h2>
            </div>
            <div className='navigationButton'>
              <div className='menuIcon'>
                <div className='menuIconBack' />
                <img src={movies} alt='movies' />
              </div>
              <h2>Movies</h2>
            </div>
            <div className='navigationButton'>
              <div className='menuIcon'>
                <div className='menuIconBack' />
                <img src={genres} alt='genres' />
              </div>
              <h2>Genres</h2>
            </div>
            <div className='navigationButton'>
              <div className='menuIcon'>
                <div className='menuIconBack' />
                <img src={watchLater} alt='watch-later' />
              </div>
              <h2>Watch Later</h2>
            </div>
          </div>
        </div>
        <div className='menuBottom'>
          <h4>LANGUAGE</h4>
          <h4>GET HELP</h4>
          <h4>EXIT</h4>
        </div>
      </div>
    </nav>
  )
}

export default Menu;