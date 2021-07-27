// == Import npm
import React from 'react';

// == Import
import ConnectedMessagesList from 'src/containers/MessagesList';
import ConnectedForm from 'src/containers/Form';

// == Composant

const App = () => (
  <div className="app">
    <ConnectedMessagesList />
    <ConnectedForm />
  </div>
);

// == Export
export default App;
