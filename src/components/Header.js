import logo from '../img/logo.png';

function Header() {
    return (
        <div className='header'>
            <img id="logo" src={logo} alt='100 Miles logo' />
        </div>
    );
}

export default Header;
