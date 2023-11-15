import './content.scss';
import data from '../../data.json';
import SelectedMovie from '../selectedMovie/SelectedMovie';
import Carousel from '../carousel/Carousel';

const Content = () => {

  const films = data.TendingNow;

  return (
    <div className='content'>
      <SelectedMovie />
      <Carousel films={films} />
    </div>
  )
}

export default Content