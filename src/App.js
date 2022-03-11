import './App.css';
import logo from './img/logo.png'
import background from './img/background.mp4'

function App() {
    return (
        <div className='app'>
            <video id='background' autoPlay muted loop>
                <source src={background} type='video/mp4'></source>
            </video>

            <img id='logo' src={logo} alt='100 Miles logo'></img>

            <div className='nav'>
                <div className='container'>
                    <div className='row'>
                        <a className='col-md' href='/'>Home</a>
                        <div className='col-md'></div>
                        <a className='col-md' href='/about'>About</a>
                        <div className='col-md'></div>
                        <a className='col-md' href='https://100miles.bigcartel.com/' target='_blank' rel='noreferrer'>Shop</a>
                        <div className='col-md'></div>
                        <a className='col-md' href='/contact'>Contact</a>
                    </div>
                </div>
            </div>

            <div className='socials'>
            </div>

            <div className='playlist'>
                <iframe id='playlist' title='YouTube' src='https://www.youtube.com/embed/videoseries?list=PLpD0fqTBFRaouHuGWR09h7-fX_syp4e8o' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default App;
