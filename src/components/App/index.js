// == Import npm
import React from 'react';

// == Import
import MessagesList from 'src/components/MessagesList';
import Form from 'src/components/Form';

// == Composant

const App = () => {
  const testMessages = ['Salut', 'Ca sent bon', 'Bof!', 'Seul lavenir nous le diras...'];

  return (
    <div className="app">
      <MessagesList messages={testMessages} />
      <Form />
    </div>
  );
};

// == Export
export default App;
