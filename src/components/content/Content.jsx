import './content.scss';
import data from '../../data.json';
import SelectedMovie from '../selectedMovie/SelectedMovie';
import Carousel from '../carousel/Carousel';
import { useState } from 'react';

const Content = () => {

  const [films, setFilms] = useState(data);

  const changeMovie = (movieId) => {
    const currentFilm = films.TendingNow.find((film) => film.Id === movieId);
    setFilms(prev => {
      return {
        Featured: currentFilm,
        TendingNow: [prev.Featured, ...prev.TendingNow.filter((film) => film.Id !== movieId)]
      }
    })
  }

  return (
    <div className='content'>
      <SelectedMovie film={films.Featured} />
      <Carousel films={films.TendingNow} changeMovie={changeMovie} />
    </div>
  )
}

export default Content