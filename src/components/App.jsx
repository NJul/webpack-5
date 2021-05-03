import '../styles/index.scss';

import Title from './Title';
import Recipes from './Recipes';
import leaves from '../images/leaves.jpg';
import Button from './Button';

const App = () => {
  return (
    <>
      <div className='box'>
        <Title />
        <Recipes />
        <img src={leaves} alt='leaves' width='250' />
        <Button />
      </div>
    </>
  );
};

export default App;
