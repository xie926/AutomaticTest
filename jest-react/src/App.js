import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoListPage from './containers/TodoListPage';
import NotFoundPage from './containers/NotFoundPage';

function App() {
  return (
    // <div>
    //   <TodoList />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<TodoListPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// data-test