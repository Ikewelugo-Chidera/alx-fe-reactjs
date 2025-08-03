// src/components/SearchUser.jsx
import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

const SearchUser = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const results = await searchGitHubUsers(query);
    setUsers(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="40" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUser;