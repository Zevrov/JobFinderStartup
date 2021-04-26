import React from 'react';
import './App.css';

import Jobs from './Jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google', location: "SF"},
  {title: 'SWE 1', company: 'Facebook', location: "LA"},
  {title: 'SWE 1', company: 'Apple', location: "CA"}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
