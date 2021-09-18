import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginCard } from './app/components/ui/molecules/Cards/loginCard/LoginCard';
import {Navbar} from './app/components/ui/molecules/navBar/Navbar';


function App() {
  return (
    <div >
      <Navbar />
      <LoginCard />

    </div>
  );
}

export default App;
