import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
    <UserProfile name="Brenda" age="22" bio="Frontend developer in the making!" />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;