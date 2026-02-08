import './App.scss';
import background from './img/background.mp4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <video id="background" autoPlay muted loop playsInline>
                    <source src={background} type='video/mp4'></source>
                </video>

                <Header />
                <Nav />

                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
