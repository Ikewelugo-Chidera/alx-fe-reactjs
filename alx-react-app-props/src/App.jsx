import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext'; // 👈 THIS IS IMPORTANT

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
      <Header />
      <MainContent />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;