import { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [state, setState] = useState(1);

  const action = (num) => {
    setState(num);
    // console.log(num);
  };

  return (
    <div>
      <h1 className='title'>React Tabs</h1>
      <div className='box'>
        <div className='tabs'>
          <div
            onClick={() => action(1)}
            className={`${state === 1 ? 'tab active-tab' : 'tab tab-1'}`}
          >
            tab 1
          </div>
          <div
            onClick={() => action(2)}
            className={`${state === 2 ? 'tab active-tab' : 'tab tab-2'}`}
          >
            tab 2
          </div>
          <div
            onClick={() => action(3)}
            className={`${state === 3 ? 'tab active-tab' : 'tab tab-3'}`}
          >
            tab 3
          </div>
        </div>

        {/* content */}
        <div className='contents'>
          <div
            className={`${state === 1 ? 'content active-content' : 'content'}`}
          >
            <h2>Only Call Hooks at the Top Level</h2>
            <p>
              Don’t call Hooks inside loops, conditions, or nested functions
            </p>
          </div>
          <div
            className={`${state === 2 ? 'content active-content' : 'content'}`}
          >
            <h2>Rule 2</h2>
            <p>Only Call Hooks from React Functions</p>
          </div>
          <div
            className={`${state === 3 ? 'content active-content' : 'content'}`}
          >
            <h2>Rule 3</h2>
            <p>Don’t call Hooks from regular JavaScript functions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
