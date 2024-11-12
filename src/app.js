import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='hello'>
        <NavBar/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
