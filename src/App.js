import React from 'react';
import Acomponent from './components/A';
import Bcomponent from './components/B';
import Ccomponent from './components/C';
import x from './helper';
//import config from './config.json';

const App = () => {

  if (x) return (<><Acomponent /><Bcomponent /></>);

  return (
    <div className="App">
      <Acomponent />
      <Bcomponent />
      <Ccomponent />
    </div>
  );
}

export default App;
