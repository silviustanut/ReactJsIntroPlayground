import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import tasks from './data/tasks.json';
import {Abouts, Footer, Tasks} from './components';

export function App() {

  const [taskList, setTaskList] = useState(tasks);

  const onDelete = (id: number) => {
    setTaskList(taskList => taskList.filter(task => task.id !== id));
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/* This route takes a render method as prop to render the component */}
        <Route
          path='/'
          exact
          render={(props) => (
            <Tasks tasks={taskList} onDelete={onDelete}/>
            // This is a conditional rendering
            /* { taskList.length === 3 && <Tasks tasks={taskList} onDelete={onDelete}/>} */
          )}
        />
        {/* This route takes a component as a prop */}
        <Route path='/about' component={Abouts} />
        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}
