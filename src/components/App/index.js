// == Import npm
import React from 'react';

// == Import
import ConnectedMessagesList from 'src/containers/MessagesList';
import ConnectedForm from 'src/containers/Form';

import Settings from 'src/containers/Settings';
import './app.scss';

// == Composant

const App = () => (
  <div className="app">
    <Settings />
    <ConnectedMessagesList />
    <ConnectedForm />
  </div>
);

// == Export
export default App;
