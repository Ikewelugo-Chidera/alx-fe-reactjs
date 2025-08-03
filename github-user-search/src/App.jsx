// src/App.jsx
import React from 'react';
import SearchUser from './components/SearchUser';
import Search from './components/Search';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>GitHub User Search</h1>
      <SearchUser />
      <Search />
    </div>
  );
}

export default App;