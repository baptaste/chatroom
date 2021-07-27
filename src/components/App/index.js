// == Import npm
import React from 'react';

// == Import
import ConnectedMessagesList from 'src/containers/MessagesList';
import Form from 'src/components/Form';

// == Composant

const App = () => (
  <div className="app">
    <ConnectedMessagesList />
    <Form />
  </div>
)
;

// == Export
export default App;
