import '../styles/index.scss';

import Title from './Title';
import Recipes from './Recipes';

const App = () => {
  return (
    <>
      <div className='box'>
        <Title />
        <Recipes />
      </div>
    </>
  );
};

export default App;
