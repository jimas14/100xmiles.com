import './App.css';
import logo from './img/logo.png'
import background from './img/background.mp4'

function App() {
    return (
        <div className='App'>
            <video autoPlay muted loop id='background'>
                <source src={background} type='video/mp4'></source>
            </video>
            <div className='container'>
                {/* fit logo in screen */}
                <img className='logo' src={logo} alt='100 Miles logo'></img>
                <div className='nav'>
                    <ul>
                        {/* 
                            actually make links navigate
                            get blurb from grace
                            fix font size 
                        */}
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='https://100miles.bigcartel.com/' target='_blank' rel='noreferrer'>Shop</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='player'>
                    <div className='video-container'>
                        {/* fit player in screen */}
                        <iframe title='playlist' src='https://www.youtube.com/embed/videoseries?list=PLpD0fqTBFRaouHuGWR09h7-fX_syp4e8o' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                    </div>
                </div>
                <div className='socials'>
                    <div className='box'>
                    {/* add socials  */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
