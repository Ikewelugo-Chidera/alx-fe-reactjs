// src/App.jsx
import React from 'react';
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography",
    email: "alice@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;