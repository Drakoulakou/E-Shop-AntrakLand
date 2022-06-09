import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Header image="https://us.123rf.com/450wm/iaroslavbrylov/iaroslavbrylov1706/iaroslavbrylov170600052/80548373-fitness-vector-logo-design-template-design-for-gym-and-fitness.jpg?ver=6" companyName="AntrakLand" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
