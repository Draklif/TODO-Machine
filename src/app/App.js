import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../context/Context';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
