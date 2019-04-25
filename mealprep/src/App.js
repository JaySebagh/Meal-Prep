import React from 'react';
import './App.css';

import BreakfastTodo from './components/breakfast/todo.js';
import LunchTodo from './components/lunch/todo.js';
import DinnerTodo from './components/dinner/todo.js';
import SnackTodo from './components/snack/todo.js';

function App() {
  return (
    <div className="App">
      <BreakfastTodo />
      <LunchTodo />
      <DinnerTodo /> 
      <SnackTodo />
    </div>
  );
}

export default App;
