import React from 'react';
import Home from './containers/Home/Index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function App() {
  return (
    <div className='App'>
      <Home />
      <button className='btn btn-success'>Hello world</button>
    </div>
  );
}

export default App;
