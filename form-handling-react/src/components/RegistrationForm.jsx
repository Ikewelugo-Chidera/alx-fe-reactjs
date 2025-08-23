import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }
    setError("");
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block border p-2 mb-2 w-full"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block border p-2 mb-2 w-full"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block border p-2 mb-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;