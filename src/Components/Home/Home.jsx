import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo";
import { SettingsProvider } from '../../SettingsContext';
function Home() {
  return (
    <div>
      <SettingsProvider>
      <Header />
        <Todo />
       <Footer />
      </SettingsProvider>
    </div>
  );
}

export default Home;
