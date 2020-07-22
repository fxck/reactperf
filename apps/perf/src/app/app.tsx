import React, { useState } from 'react';
import range from 'lodash-es/range';
import './app.scss';

const Test = () => {
  return (
    <div className={`${true ? 'is-foo' : ''}`} style={{ width: '100px', height: '100px', background: '#ccc' }}></div>
  );
}

const Complex = () => {
  return (
    <div className={`${true ? 'is-foo' : ''} ${false ? 'is-bar' : ''}`}>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
    </div>
  );
}

export const App = () => {
  const data = range(0, 200).map((_, i) => <div className="item" key={i}>
    <Complex/>
  </div>);

  const [ isVisible, setIsVisible ] = useState(true);
  const toggle = () => {setIsVisible((s) => !s)};

  return (
    <div>
      <button onClick={toggle}>
        toggle
      </button>

      {isVisible &&
      <div>
        {data}
      </div>}

    </div>
  );
};

export default App;
