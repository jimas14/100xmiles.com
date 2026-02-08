import { Youtube, Instagram, Spotify, Tiktok } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <a  id='btn'
                    href='https://www.youtube.com/channel/UCV5iUnKTMNeONX0Tmgkr08g'
                    target='_blank'
                    rel='noreferrer'>
                    <Youtube className='icon' size={28} />
                </a>
                <a  id='btn'
                    href='https://instagram.com/100milesmedia'
                    target='_blank'
                    rel='noreferrer'>
                    <Instagram className='icon' size={28} />
                </a>
                <a  id='btn'
                    href='https://open.spotify.com/show/6FaQQTWyfLEw4iPaUm8r8j'
                    target='_blank'
                    rel='noreferrer'>
                    <Spotify className='icon' size={28} />
                </a>
                <a  id='btn'
                    href='https://vm.tiktok.com/ZMeVbLATy/'
                    target='_blank'
                    rel='noreferrer'>
                    <Tiktok className='icon' size={28} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
