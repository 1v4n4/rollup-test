import React from 'react';
import Acomponent from './components/A';
import Bcomponent from './components/B';
import config from './config.json';

const App = () => {

  if (config.journey[0] === 'A') return (<Acomponent />);
  return (
    <div className="App">
      <Acomponent />
      <Bcomponent />
    </div>
  );
}

export default App;
