// src/App.jsx
import React from 'react';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: "Jane Doe",
    age: "25",
    bio: "Loves hiking and photography",
    email: "Jane Doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;