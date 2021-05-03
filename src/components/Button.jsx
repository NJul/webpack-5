import { useState } from 'react';

const Button = () => {
  const [state, setState] = useState('Initial state');
  return (
    <div>
      <h4>{state}</h4>
      <button onClick={() => setState('Button clicked')}>Click me</button>
    </div>
  );
};

export default Button;
