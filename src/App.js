import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllProducts from './pages/All-Products';
import Categories from './pages/Categories';
import SideMenu from './components/SideMenu';
import { useState, useEffect, createContext } from "react";

export const CategoriesContext = createContext()


function App() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        setcategories(json)
      })
  }, [])

  return (
    <CategoriesContext.Provider value={categories}>
      <div className="App">
        <div className="content">
          <BrowserRouter>
            <Header image="https://us.123rf.com/450wm/iaroslavbrylov/iaroslavbrylov1706/iaroslavbrylov170600052/80548373-fitness-vector-logo-design-template-design-for-gym-and-fitness.jpg?ver=6" companyName="AntrakLand" />
            <SideMenu  categories={[]}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/products' element={<AllProducts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </CategoriesContext.Provider>
  );
}

export default App;
