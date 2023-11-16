import './content.scss';
import data from '../../data.json';
import SelectedMovie from '../selectedMovie/SelectedMovie';
import Carousel from '../carousel/Carousel';
import { useEffect, useState } from 'react';

const Content = () => {

  const [films, setFilms] = useState(data);

  const changeMovie = (movieId) => {
    const storageData = sessionStorage.getItem('lastClickedMovieId') || '[]';
    const clickedList = JSON.parse(storageData);
    const newClickedList = [movieId, ...clickedList.filter((currentId) => currentId !== movieId)];
    
    sessionStorage.setItem('lastClickedMovieId', JSON.stringify(newClickedList));

    const currentFilm = films.TendingNow.find((film) => film.Id === movieId);
    setFilms(prev => {
      return {
        Featured: currentFilm,
        TendingNow: [prev.Featured, ...prev.TendingNow.filter((film) => film.Id !== movieId)]
      }
    })
  }

  const sortListByClickedMovies = () => {
    const storageData = sessionStorage.getItem('lastClickedMovieId') || '[]';
    const clickedList = JSON.parse(storageData);
    let clickedMovies = [];

    clickedList.forEach(itemId => {
      clickedMovies.push(films.TendingNow.find((film) => film.Id === itemId));
    });
    
    setFilms(prev => {
      return {
        Featured: prev.Featured,
        TendingNow: [...clickedMovies, ...prev.TendingNow?.filter(item => !clickedMovies.includes(item))]
      }
    })
  }

  useEffect(() => {
    if(films.TendingNow.length > 0){
      sortListByClickedMovies();
    };
  }, [])

  return (
    <div className='content'>
      <SelectedMovie film={films.Featured} />
      <Carousel films={films.TendingNow} changeMovie={changeMovie} />
    </div>
  )
}

export default Content