import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Particles from './components/Particles';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Particles />
      <div className="content-wrapper">
        <Header />
        <Hero />
        <Welcome />
        <Services />
        <About />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
