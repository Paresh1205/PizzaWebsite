import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import {productData,productDataTwo} from './components/Products/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Feature from './components/Feature/FeatureComponent';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <Products name={'Choose your Favourite'} data={productData}/>
      <Feature />
      <Products name={'Sweet treats for you !'} data={productDataTwo}/>
      <Footer />
    </div>
  );
}

export default App;
