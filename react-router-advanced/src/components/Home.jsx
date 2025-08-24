export default function Home({ login }) {
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
}